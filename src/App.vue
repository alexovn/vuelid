<script setup lang="ts">
  import { ref, reactive } from 'vue';
  import { z } from 'zod'
  import { useValidation } from '../lib/main';

  const schema = ref(
    z.object({
      name: z.string().min(1, { error: 'The name field is required' }),
      email: z.email({ error: 'Invalid email address' }),
    })
  );

  const form = reactive({
    name: '',
    email: ''
  })

  const {
    validate,
    getError,
    clearErrors,
    isValid
  } = useValidation(schema, form);

  const submit = async () => {
    await validate();

    if (isValid.value) {
      alert('Validation succeeded!');
    }
  };
</script>

<template>
  <form @submit.prevent="submit">
    <div>
      <div>
        <label>
          <span>Name</span>
          <input v-model="form.name" placeholder="Name" name="name" type="text">
        </label>
        <div>{{ getError('name') }}</div>
      </div>

      <div>
        <label>
          <span>Email</span>
          <input v-model="form.email" placeholder="Email" name="email" type="text">
        </label>
        <div>{{ getError('email') }}</div>
      </div>
    </div>

    <button type="submit">
      Submit
    </button>

    <button type="button" @click="clearErrors">
      Clear errors
    </button>
  </form>
</template>