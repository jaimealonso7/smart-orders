exports.handler = async (event) => {
  const { order } = event || {};
  if (!order?.orderId) { const e = new Error("Payload inválido"); e.name = "BadRequest"; throw e; }
  if (String(order.orderId).endsWith("9")) { const e = new Error("Fallo en cobro"); e.name = "Payment.Fallo"; throw e; }
  const paymentId = `PAY-${order.orderId}`;
  console.log("Pago OK", paymentId);
  return { ...event, paymentId, paid: true };
};
