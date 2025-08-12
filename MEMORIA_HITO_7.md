# MEMORIA — Hito 7: Flujo “procesar pedido” (Step Functions)

## Objetivo
Orquestar el procesamiento de un pedido con pasos claros y compensación de fallos.

## Diseño
- **Saga**: si falla el pago, se ejecuta `releaseStock`.
- **Reintentos** en errores transitorios de Lambda y de pago.
- **Notificación** queda como stub (SNS se integra en Hito 9).

## Pruebas
1. Éxito: `ORD-123` y `SKU1` qty 2.
2. Stock insuficiente: `SKU-NOSTOCK`.
3. Pago fallido: `ORD-129` (termina en 9) → compensa.

## Próximos hitos
- **Hito 8**: SQS/EventBridge para colas de pedidos.
- **Hito 9**: SNS Email/SMS al cambiar estado.