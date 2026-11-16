<script setup>
import { ref } from 'vue'

const email = ref('')
const company = ref('')
const pending = ref(false)
const message = ref('')
const failed = ref(false)

async function submit() {
  pending.value = true
  message.value = ''
  failed.value = false
  try {
    const res = await fetch('/api/subscribe', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ email: email.value, company: company.value }),
    })
    const body = await res.json().catch(() => ({}))
    if (!res.ok) {
      failed.value = true
      message.value = body.error || 'Could not subscribe'
      return
    }
    email.value = ''
    message.value = "You're on the list."
  } catch {
    failed.value = true
    message.value = 'Could not subscribe'
  } finally {
    pending.value = false
  }
}
</script>

<template>
  <form class="subscribe" @submit.prevent="submit">
    <p>Get updates from Instinct Bits.</p>
    <div class="row">
      <label class="hp" for="company">Company</label>
      <input id="company" v-model="company" class="hp" name="company" tabindex="-1" autocomplete="off" />
      <input
        v-model="email"
        type="email"
        name="email"
        required
        maxlength="254"
        autocomplete="email"
        placeholder="Email"
        aria-label="Email"
      />
      <button type="submit" :disabled="pending">{{ pending ? 'Subscribing' : 'Subscribe' }}</button>
    </div>
    <p v-if="message" class="status" :data-failed="failed">{{ message }}</p>
  </form>
</template>

<style scoped>
.subscribe {
  flex: 1 0 100%;
  width: 100%;
  margin: 0.25rem 0 0;
  text-align: left;
}

.row {
  display: flex;
  gap: 0.5rem;
  margin: 0.5rem 0 0;
  flex-wrap: wrap;
}

input[type='email'] {
  flex: 1;
  min-width: 10rem;
  padding: 0.75rem 1rem;
  border: 1px solid var(--color-border);
  border-radius: 6px;
  background: var(--color-background);
  color: var(--color-text);
  font-size: 1rem;
}

button {
  padding: 0.75rem 1.5rem;
  background: var(--color-heading);
  color: var(--color-background);
  border: none;
  border-radius: 6px;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
}

button:disabled {
  opacity: 0.6;
  cursor: default;
}

.hp {
  position: absolute;
  left: -9999px;
}

.status {
  margin-top: 0.75rem;
}

.status[data-failed='true'] {
  color: var(--color-heading);
}
</style>
