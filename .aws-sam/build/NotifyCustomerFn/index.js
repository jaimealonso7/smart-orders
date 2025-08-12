exports.handler = async (event) => {
  const { order, paymentId } = event || {};
  const message = `Pedido ${order?.orderId} procesado. Pago: ${paymentId ?? "N/A"}`;
  console.log("Notificación (stub):", message);
  return { ...event, notified: true };
};
