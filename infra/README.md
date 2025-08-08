# Infra — AWS CDK / Serverless

Elige una opción:

## Opción A: AWS CDK (TypeScript)
- `npm i`
- `cdk bootstrap`
- `cdk synth`
- `cdk deploy --all`

## Opción B: Serverless Framework
- Instala `serverless`
- `sls deploy`

Variables sugeridas (SSM/Secrets):
- `/smart-orders/dev/JWT_AUDIENCE`
- `/smart-orders/dev/DB_SECRET_ARN`

**Próximo commit:** Tabla DynamoDB `Orders` + API Gateway básico.