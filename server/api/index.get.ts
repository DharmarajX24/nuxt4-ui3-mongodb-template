export default defineEventHandler(async (event) => {
  try {
    await db.command({ ping: 1 });
    return { status: 'connected' };
  } catch (e) {
    return { status: 'disconnected' };
  }
});
