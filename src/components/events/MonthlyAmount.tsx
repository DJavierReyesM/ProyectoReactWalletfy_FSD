import { EventType } from "@customTypes/event";
import { useAppSelector } from "@hooks/store";
import { selectInitialAmount } from "@store/slice/initialAmount";

type MonthlyAmountProps = {
    events: EventType[],
}

const MonthlyAmount = (props: MonthlyAmountProps) => {
    const { events } = props;

    const incomes = events.filter((evt)=> evt.type =="ingreso").reduce((sum, evt)=> sum + evt.amount , 0)
    const expense = events.filter((evt)=> evt.type =="egreso").reduce((sum, evt)=> sum + evt.amount , 0)
    const currentAmount = useAppSelector(selectInitialAmount);
    return (
        <>
            <div className="mt-2 dark:bg-zinc-800 dark:text-gray-200 dark:border-zinc-700 shadow-lg rounded-lg py-2 px-3 border border-zinc-300">
                <div className="rounded-md flex justify-between gap-x-[8rem]">
                    <p className="text-sm text-gray-900 dark:text-gray-200">
                        Ingresos
                    </p>
                    <p className="text-sm text-gray-900 dark:text-gray-200">
                        ${incomes}
                    </p>
                </div>
                <div className="rounded-md flex justify-between gap-x-[8rem]">
                    <p className="text-sm text-gray-900 dark:text-gray-200">
                        Egresos
                    </p>
                    <p className="text-sm text-gray-900 dark:text-gray-200">
                        ${expense}
                    </p>
                </div>
                <div className="rounded-md flex justify-between gap-x-[8rem]">
                    <p className="text-sm text-gray-900 dark:text-gray-200">
                        Mensual
                    </p>
                    <p className="text-sm text-gray-900 dark:text-gray-200">
                        ${incomes - expense}
                    </p>
                </div>
                <div className="rounded-md flex justify-between gap-x-[8rem]">
                    <p className="text-sm text-gray-900 dark:text-gray-200">
                        Global
                    </p>
                    <p className="text-sm text-gray-900 dark:text-gray-200">
                        ${currentAmount + incomes - expense}
                    </p>
                </div>
            </div>
        </>
    );

}

export default MonthlyAmount;