# Quick Start

## Prerequisites

- [Node.js](https://nodejs.org/) version 22 or higher.
- [Vue.js](https://vuejs.org/) version 3.x or higher.
- [Zod](https://zod.dev/) version 4.x or higher.

## Installation

Install the library using your preferred package manager.

::: code-group

```shell [npm]
npm install @alexovn/vuelid
```

```shell [yarn]
yarn add @alexovn/vuelid
```

```shell [pnpm]
pnpm add @alexovn/vuelid
```

```shell [bun]
bun add @alexovn/vuelid
```
:::

## Usage

Import `useValidation` composable from the library, pass validation schema, form data and optional settings to its params and use its built-in functions.

```Vue
<script setup lang="ts">
  import { ref, reactive } from 'vue';
  import { z } from 'zod'
  import { useValidation } from '@alexovn/vuelid';

  const schema = ref(
    z.object({
      name: z.string().min(1, { error: 'The name field is required' }),
      email: z
        .string()
        .min(1, { error: 'The email field is required' })
        .pipe(z.email({ error: 'Invalid email' })),
    })
  );

  const form = reactive({
    name: '',
    email: ''
  })

  const { validate, getError, isValid } = useValidation(schema, form);

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
  </form>
</template>
```