<template>
  <div class="ma">
    <input v-model="message" />
    <button @click="sendMessage">Send</button>
    <div>
      <div v-if="data === ''">Ask a question for a response</div>
      <div v-if="loading">
        <p>Hold up, processing</p>
      </div>
      <div v-else>{{ data }}</div>
    </div>
  </div>
</template>

<script setup>
const { send } = useChatgpt();
const loading = ref(false);
const data = ref("");
const message = ref("");

async function sendMessage() {
  try {
    loading.value = true;
    const response = await send(message.value);
    data.value = response;
    loading.value = false;
  } catch (error) {
    alert(error.message);
    loading.value = false;
  }
}
</script>
