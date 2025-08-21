import { SNSClient, PublishCommand } from "@aws-sdk/client-sns";
const sns = new SNSClient({});
const TOPIC_ARN = process.env.NOTIFY_TOPIC_ARN;

export const handler = async (event) => {
  // event: { orderId, oldStatus, newStatus, reason, customerEmail?, customerPhoneE164? }
  await sns.send(new PublishCommand({
    TopicArn: TOPIC_ARN,
    Subject: `Pedido ${event.orderId} → ${event.newStatus}`,
    Message: JSON.stringify({ ...event, at: new Date().toISOString() }),
    MessageAttributes: {
      orderId: { DataType: "String", StringValue: event.orderId },
      newStatus: { DataType: "String", StringValue: event.newStatus },
    }
  }));
  return { ok: true };
};
