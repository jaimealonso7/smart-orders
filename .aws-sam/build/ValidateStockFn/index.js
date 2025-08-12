exports.handler = async (event) => {
  const { order } = event || {};
  if (!order || !Array.isArray(order.items)) {
    const e = new Error("Payload inválido"); e.name = "BadRequest"; throw e;
  }
  for (const it of order.items) {
    if (it.qty <= 0) { const e = new Error("Cantidad inválida"); e.name = "BadRequest"; throw e; }
    if (String(it.sku).toUpperCase().includes("NOSTOCK")) { const e = new Error("Sin stock"); e.name = "StockNoDisponible"; throw e; }
  }
  const reservation = { reservationId: `RES-${order.orderId}`, expiresInSec: 900 };
  console.log("Stock reservado", reservation);
  return { ...event, reservation, stockReserved: true };
};
