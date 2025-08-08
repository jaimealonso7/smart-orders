# Roadmap — Smart Orders

## Fase 1 — API mínima
- Endpoints `POST /orders`, `GET /orders/{id}`.
- DynamoDB `Orders`.
- Entregable: demo Postman + diagrama.

## Fase 2 — Auth
- Cognito + JWT authorizer + WAF básico.

## Fase 3 — Procesamiento
- SQS + Lambda worker + Step Functions + DLQ.

## Fase 4 — Real-time
- AppSync (suscripciones) o WebSocket.

## Fase 5 — Frontend
- S3 + CloudFront + Amplify (opcional).

## Fase 6 — Observabilidad
- CloudWatch/X-Ray + métricas de negocio.

## Fase 7 — Analítica
- S3 (eventos), Glue, Athena, QuickSight.