import { z } from 'zod'

export const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  JWT_SECRET: z.string(),
  PORT: z.coerce.number().optional().default(3333), // The coerce make the transformation of string in number
})

export type Env = z.infer<typeof envSchema>
