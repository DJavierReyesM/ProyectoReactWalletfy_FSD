import { z } from "zod";

export const ThemeSchema = z.object({
    schema: z.enum(['light', 'dark']),
});

export type Theme = z.infer<typeof ThemeSchema>;