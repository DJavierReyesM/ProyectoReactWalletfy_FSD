import { z } from "zod";

export const InitialAmountSchema = z.object({
    value: z.number().nonnegative(),
});

export type InitialAmount = z.infer<typeof InitialAmountSchema>;