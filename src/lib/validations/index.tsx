import { z } from "zod";

export const formSchema = z.object({
  birthday: z.date(),
  email: z.string().email(),
  content: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  role: z.union([z.literal("editor"), z.literal("viewer")]),
});

export type FormValues = z.infer<typeof formSchema>;
