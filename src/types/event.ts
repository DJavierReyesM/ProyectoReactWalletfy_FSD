import { z } from "zod";


export const EventSchema = z.object({
    id: z.string().uuid({ message: "Id inválido"}),
    name: z.string()
        .min(3, 'El nombre debe tener al menos 3 caracteres de largo.')
        .max(20, 'El nombre debe tener a lo mucho 20 caracteres de largo'),
    description: z.string()
        .max(100, 'La descripción debe tener a lo mucho 100 caracteres')
        .optional(),
    amount: z.number().int().nonnegative("La cantidad debe ser de al menos 1"),
    date: z.date({ message: "La fecha es requerida."}),
    type: z.enum(["ingreso", "egreso"], {
        errorMap: () => ({ message: 'Tipo de evento no válido' })
    })
})

export type EventType = z.infer<typeof EventSchema>;

//Loaders
export const EventLoaderDataSchema = z.object({
    events: z.array(EventSchema),
  });
  
  export type EventLoaderDataType = z.infer<typeof EventLoaderDataSchema>;
  
  export const EventByIdLoaderDataSchema = z.object({
    event: EventSchema.optional(),
  });
  
  export type EventByIdLoaderDataType = z.infer<typeof EventByIdLoaderDataSchema>;
  
  //Form
  export const EventCreateSchema = EventSchema.omit({ id: true });
  
  export type EventCreateType = z.infer<typeof EventCreateSchema>;