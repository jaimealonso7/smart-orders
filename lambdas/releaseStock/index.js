exports.handler = async (event) => {
  const { reservation } = event || {};
  console.log("Revirtiendo reserva", reservation);
  return { ...event, stockReleased: true };
};
