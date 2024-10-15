import { z } from 'zod';

export const MetricsSchema = z.object({
  ingresos_totales: z.number(),
  egresos_totales: z.number(),
  tasa_crecimiento: z.number(),
  pedidos_totales: z.number(),
  ventas_por_categoria: z.array(
    z.object({
      producto__categoria: z.string(),
      total: z.number(),
    })
  ),
});

export type Metrics = z.infer<typeof MetricsSchema>;