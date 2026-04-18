import { type ZodType, z } from 'zod'
import { ref, watch, toValue, type MaybeRefOrGetter, type Ref } from 'vue'
import { get } from '../utils'

export type UseValidationOptions = { mode: 'eager' | 'lazy' }
export type UseValidationErrors = Partial<Record<string, z.core.$ZodIssue[]>>

export type UseValidationResult = {
  validate: () => Promise<Ref<UseValidationErrors | null>>
  errors: Ref<UseValidationErrors | null>
  isValid: Ref<boolean>
  clearErrors: () => void
  getError: (path: string) => unknown
  scrollToError: (selector?: string, options?: { offset: number }) => void
}

function useValidation<
  T extends ZodType,
  U = Record<string, unknown>
>(
  schema: MaybeRefOrGetter<T>,
  data: MaybeRefOrGetter<U>,
  options?: UseValidationOptions
): UseValidationResult {
  const opts = Object.assign({}, { mode: 'lazy' }, options)

  const isValid = ref(true)
  const errors = ref<UseValidationErrors | null>(null)

  const clearErrors = () => {
    errors.value = null
  }

  let unwatch: null | (() => void) = null
  const validationWatch = () => {
    if (unwatch !== null) {
      return
    }

    unwatch = watch(
      [() => toValue(data), () => toValue(schema)],
      async () => {
        await validate()
      },
      { deep: true }
    )
  }

  const validate = async (): Promise<Ref<UseValidationErrors | null>> => {
    clearErrors()

    const result = await toValue(schema).safeParseAsync(toValue(data));

    isValid.value = result.success

    if (!result.success) {
      errors.value = Object.groupBy(result.error.issues, item => item.path.join(','))
      validationWatch()
    }

    return errors
  }

  const scrollToError = (selector = '.is-error', options = { offset: 0 }) => {
    const element = document.querySelector(selector)

    if (element) {
      const topOffset = element.getBoundingClientRect().top - document.body.getBoundingClientRect().top - options.offset

      window.scrollTo({
        behavior: 'smooth',
        top: topOffset
      })
    }
  }

  const getError = (path: string) => {
    return get(errors.value ?? {}, `${path.replaceAll('.', ',')}.0.message`)
  }

  if (opts.mode === 'eager') {
    validationWatch()
  }

  return {
    validate,
    errors,
    isValid,
    clearErrors,
    getError,
    scrollToError
  }
}

export default useValidation
