<script setup lang="ts">
const { data, pending, error } = await useFetch('/api');
const status = data?.value?.status;
</script>

<template>
  <div>
    Nuxt 4 + Nuxt UI 3 + MongoDB
    <div v-if="pending">Checking DB connection...</div>
    <div v-else-if="status === 'connected'">✅ Connected to MongoDB</div>
    <div v-else>❌ Connection failed, please check .env settings.<br />{{ error }}</div>
  </div>
</template>
