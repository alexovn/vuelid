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

Import `useValidation` hook from the library, pass validation schema, form data and optional settings to its params and use its built-in functions.

```Vue
<script setup lang="ts">
import { ref, shallowRef } from 'vue';
import { z, type ZodTypeAny } from 'zod';
import { useValidation } from '@alexovn/vuelid';

const schema = shallowRef<ZodTypeAny>(
  z.object({
    name: z.string().min(1, { error: 'The name field is required' }),
    email: z.email({ error: 'Invalid email address' }),
    website: z.string().url({ error: 'Please enter a valid URL' }),
    address: z.object({
      street: z.string().min(1, { error: 'The street field is required' }),
      city: z.string().min(1, { error: 'The city field is required' }),
    }),
  })
);

const form = reactive({
  name: '',
  email: '',
  website: '',
  address: {
    street: '',
    city: '',
  },
});

const {
  validate,
  errors,
  isValid,
  clearErrors,
  getError,
  scrollToError
} = useValidation(schema, form, { mode: 'eager' });

const submit = async () => {
  await validate();

  if (isValid.value) {
    alert('Validation succeeded!');
  } else {
    scrollToError('.p-invalid', { offset: 24 });
  }
};
</script>
```