export default defineNitroPlugin((nitroApp) => {
  const config = useRuntimeConfig();

  nitroApp.hooks.hook('request', async (event) => {
    if (!db) {
      await initializeDb();
    }
  });
});
