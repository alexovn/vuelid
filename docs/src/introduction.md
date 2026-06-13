# Introduction

## What is Vuelid?

Vuelid (a portmanteau of words "Vue" and "Valid") is a tiny validation library for Vue based on Zod schemas. It's simple, fast and yet powerful enough to cover many cases of forms validation.

It was made as a replacement for full-blown solutions like `VeeValidate`, `Vuelidate`, `FormKit` etc., because sometimes we need some light and plug-n-play approach that just works.

## Why should I use Vuelid?

Vuelid has everything what you need for the forms validation and its easy to use. If you already familiar with Zod schemas (or any other schema-based validation libraries like `Yup`) you find Vuelid is a tool that you missed before. With it you can:

- Validate. Zod handles your schemas, so do whatever validation you need.
- Change schemas on-the-fly. You can change schemas conditionally and Vuelid will update its state on every turn.
- Get errors by field path (e.g. address.city). It's very useful for displaying UX-friendly error messages.
- Scroll to errors. Use built-in function to scroll page to the first form field with an error.
- Clear errors. Clear current validation errors before triggering a re-validation.