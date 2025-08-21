import { SFNClient, StartExecutionCommand } from "@aws-sdk/client-sfn";
const sfn = new SFNClient({});
const STATE_MACHINE_ARN = process.env.STATE_MACHINE_ARN;

export const handler = async (event) => {
  for (const record of event.Records) {
    const payload = JSON.parse(record.body);
    const cmd = new StartExecutionCommand({
      stateMachineArn: STATE_MACHINE_ARN,
      input: JSON.stringify({
        orderId: payload.orderId,
        idempotencyKey: payload.idempotencyKey,
        source: "sqs",
        traceId: payload.traceId,
      }),
      name: `${payload.orderId}-${Date.now()}`
    });
    await sfn.send(cmd);
  }
  return { ok: true };
};
