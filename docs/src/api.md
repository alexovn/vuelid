# API

## `useValidation`

It's a core composable that consists of several useful functions that you can expose from it.

- Type:
```ts
type UseValidationResult = {
  validate: () => Promise<Ref<UseValidationErrors | null>>
  errors: Ref<UseValidationErrors | null>
  isValid: Ref<boolean>
  clearErrors: () => void
  getError: (path: string) => unknown
  scrollToError: (selector?: string, options?: { offset: number }) => void
}

type UseValidationOptions = { mode: 'eager' | 'lazy' }

(schema: MaybeRefOrGetter<T>, data: MaybeRefOrGetter<U>, options?: UseValidationOptions) => UseValidationResult
```

- Default: `options: { mode: 'lazy' }`

## `validate`

An async function that triggers the validation process based on the provided Zod schema and the current form data. It returns the validation errors if any, or null if the validation is successful.

- Type:
```ts
type UseValidationErrors = Partial<Record<string, z.core.$ZodIssue[]>>

Ref<UseValidationErrors | null>
```

## `errors`

A ref that holds the validation errors in the form of a grouped object, where each property corresponds to a form field path (e.g. address.city), and its value is an array of Zod validation issues.

- Type:
```ts
type UseValidationErrors = Partial<Record<string, z.core.$ZodIssue[]>>

Ref<UseValidationErrors | null>
```

## `isValid`

A boolean ref that tracks the overall validity of the form.

- Type: `Ref<boolean>`

## `clearErrors`

A function that clears the current validation errors, setting the errors ref to null. Useful when you want to reset the form errors before triggering a re-validation.

- Type: `() => void`

## `getError`

A helper function to retrieve the error message for a specific form field path. It takes a key path with dot notation as an argument and returns the first error message for that field.

- Type: `(path: string) => unknown`


## `scrollToError`

A function that scrolls the page to the first form field with an error, making it visible to the user. It takes optional parameters for the error selector and scroll options.

- Type: `(selector?: string, options?: { offset: number }) => void`