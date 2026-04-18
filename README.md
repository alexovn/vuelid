# Vuelid

Vuelid is a tiny validation library for Vue.js based on Zod. Fully typed. Dual modes. Errors highlight. And more.

## Core Features  

- Zod's validation schema support
- Fully typed
- Lazy and eager modes
- Scroll to error
- Highlight errors in form
- Zero extra dependencies

## How To Use

The composable takes a Zod object schema (can be a reactive variable) and a data object that holds the form data that you want to validate (can be either reactive or ref) as parameters and returns refs and functions that you can then use in your components. Optionally it can also accept an options object to set the validation mode.

```JavaScript
const {
  validate,
  errors,
  isValid,
  clearErrors,
  getError,
  scrollToError
} = useValidation(validationSchema, form, { mode: 'lazy' });
```

- `validate` - An async function that triggers the validation process based on the provided Zod schema and the current form data. It returns the validation errors if any, or null if the validation is successful.
- `errors` - A ref that holds the validation errors in the form of a grouped object, where each property corresponds to a form field path (e.g. address.city), and its value is an array of Zod validation issues.
- `isValid` - A boolean ref that tracks the overall validity of the form.
- `clearErrors` - A function that clears the current validation errors, setting the errors ref to null. Useful when you want to reset the form errors before triggering a re-validation.
- `getError` - A helper function to retrieve the error message for a specific form field path. It takes a keypath with dot notation as an argument and returns the first error message for that field.
- `scrollToError` - A function that scrolls the page to the first form field with an error, making it visible to the user. It takes optional parameters for the error selector and scroll options.

Using these returns you can handle form validation, retrieve error details, and manage the user interface based on the validation status, contributing to a robust and user-friendly form validation experience!

## Credits

This library is based on Dev's original article ["A simple Vue form validation composable with Zod"](https://dev.to/kouts/a-simple-vue-form-validation-composable-with-zod-38m8) by [Giannis Koutsaftakis (kouts)](https://github.com/kouts). Show author your love ❤️