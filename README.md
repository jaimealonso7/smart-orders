# Smart Orders — AWS Serverless

Monorepo de referencia con tres paquetes: infraestructura (IaC), backend (Lambdas/API) y frontend (dashboard).  
Tecnologías: AWS CDK/Serverless, API Gateway, Lambda, DynamoDB, SQS, Step Functions, AppSync, Cognito, S3, CloudFront.

## Estructura
- `infra/` — Infraestructura como código.
- `backend/` — Código del backend (Node.js/TypeScript).
- `frontend/` — Dashboard (React).

## Primeros pasos
1. Instala Node.js LTS.
2. `npm install -g aws-cdk` (si usas CDK).
3. Crea un entorno GitHub y habilita Actions si quieres CI.
4. Crea los archivos `.env` según `infra/README.md` y `backend/README.md`.
5. Despliega el entorno `dev`.

## Documentación
- Ver carpeta `docs/` para ADRs, Roadmap y decisiones.

---

# Hito 7 — Step Functions: flujo “procesar pedido”

MVP del flujo con **AWS Step Functions**:
1) Validar stock → 2) Marcar como pagado → 3) Notificar cliente (stub)

## Despliegue (SAM)
```bash
sam build
sam deploy --guided

