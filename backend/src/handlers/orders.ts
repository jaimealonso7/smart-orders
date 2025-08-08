import { APIGatewayProxyEventV2, APIGatewayProxyStructuredResultV2 } from 'aws-lambda';

export async function createOrder(event: APIGatewayProxyEventV2): Promise<APIGatewayProxyStructuredResultV2> {
  const body = event.body ? JSON.parse(event.body) : {};
  const orderId = crypto.randomUUID();
  // TODO: persistir en DynamoDB
  return {
    statusCode: 201,
    body: JSON.stringify({ orderId, received: body }),
    headers: { 'content-type': 'application/json' }
  };
}

export async function getOrder(event: APIGatewayProxyEventV2): Promise<APIGatewayProxyStructuredResultV2> {
  const { id } = event.pathParameters || {};
  // TODO: obtener de DynamoDB
  return {
    statusCode: 200,
    body: JSON.stringify({ orderId: id, status: 'PENDING' }),
    headers: { 'content-type': 'application/json' }
  };
}