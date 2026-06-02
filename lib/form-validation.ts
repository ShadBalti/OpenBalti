/**
 * Form Validation & Error Handling Utilities
 * Standardized form validation and error message patterns
 */

export interface FormFieldError {
  field: string
  message: string
  type: "required" | "invalid" | "server" | "validation"
}

export interface FormErrors {
  [key: string]: string
}

/**
 * Common validation patterns
 */
export const validationPatterns = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  url: /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/,
  username: /^[a-zA-Z0-9_-]{3,20}$/,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/,
  phoneNumber: /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/,
  zipCode: /^\d{5}(-\d{4})?$/,
  baltiWord: /^[^\s]{2,50}$/, // Non-whitespace, 2-50 chars
  englishWord: /^[a-zA-Z\s]{2,50}$/, // Letters and spaces only
}

/**
 * Validation rules
 */
export const validationRules = {
  required: (value: string | undefined): boolean => {
    return value !== undefined && value !== null && value.trim() !== ""
  },

  minLength: (value: string, min: number): boolean => {
    return value.length >= min
  },

  maxLength: (value: string, max: number): boolean => {
    return value.length <= max
  },

  email: (value: string): boolean => {
    return validationPatterns.email.test(value)
  },

  url: (value: string): boolean => {
    return validationPatterns.url.test(value)
  },

  password: (value: string): boolean => {
    return validationPatterns.password.test(value)
  },

  match: (value: string, compareValue: string): boolean => {
    return value === compareValue
  },

  alphanumeric: (value: string): boolean => {
    return /^[a-zA-Z0-9]+$/.test(value)
  },

  numeric: (value: string): boolean => {
    return /^\d+$/.test(value)
  },

  baltiWord: (value: string): boolean => {
    return validationPatterns.baltiWord.test(value)
  },

  englishWord: (value: string): boolean => {
    return validationPatterns.englishWord.test(value)
  },
}

/**
 * Error message templates
 */
export const errorMessages = {
  required: (fieldName: string) => `${fieldName} is required`,
  minLength: (fieldName: string, min: number) => `${fieldName} must be at least ${min} characters`,
  maxLength: (fieldName: string, max: number) => `${fieldName} must be no more than ${max} characters`,
  email: "Please enter a valid email address",
  url: "Please enter a valid URL",
  password: "Password must contain uppercase, lowercase, numbers, and be at least 8 characters",
  passwordMatch: "Passwords do not match",
  alphanumeric: (fieldName: string) => `${fieldName} must contain only letters and numbers`,
  numeric: (fieldName: string) => `${fieldName} must contain only numbers`,
  baltiWord: "Please enter a valid Balti word",
  englishWord: "Please enter a valid English word",
  invalidInput: "Please enter a valid input",
  serverError: "An error occurred. Please try again later.",
}

/**
 * Validate a form field
 */
export function validateField(
  fieldName: string,
  value: string | undefined,
  rules: {
    required?: boolean
    minLength?: number
    maxLength?: number
    pattern?: keyof typeof validationPatterns
    custom?: (value: string) => boolean | string
  },
): string | null {
  // Check required
  if (rules.required && !validationRules.required(value)) {
    return errorMessages.required(fieldName)
  }

  if (value === undefined || value === null || value.trim() === "") {
    return null // No value, no further validation unless required
  }

  // Check min length
  if (rules.minLength && !validationRules.minLength(value, rules.minLength)) {
    return errorMessages.minLength(fieldName, rules.minLength)
  }

  // Check max length
  if (rules.maxLength && !validationRules.maxLength(value, rules.maxLength)) {
    return errorMessages.maxLength(fieldName, rules.maxLength)
  }

  // Check pattern
  if (rules.pattern) {
    const patternValidator = (patternValue: string) => validationPatterns[rules.pattern!].test(patternValue)
    if (!patternValidator(value)) {
      const patternMessage = errorMessages[rules.pattern as keyof typeof errorMessages]
      return typeof patternMessage === "string" ? patternMessage : errorMessages.invalidInput
    }
  }

  // Custom validation
  if (rules.custom) {
    const result = rules.custom(value)
    if (result === false) {
      return errorMessages.invalidInput
    } else if (typeof result === "string") {
      return result
    }
  }

  return null // No errors
}

/**
 * Validate all form fields
 */
export function validateForm(
  formData: Record<string, any>,
  validationSchema: Record<string, Parameters<typeof validateField>[2]>,
): FormErrors {
  const errors: FormErrors = {}

  for (const fieldName in validationSchema) {
    const error = validateField(fieldName, formData[fieldName], validationSchema[fieldName])
    if (error) {
      errors[fieldName] = error
    }
  }

  return errors
}

/**
 * Check if form has any errors
 */
export function hasErrors(errors: FormErrors): boolean {
  return Object.keys(errors).length > 0
}

/**
 * Get first error message from errors object
 */
export function getFirstError(errors: FormErrors): string | null {
  const firstKey = Object.keys(errors)[0]
  return firstKey ? errors[firstKey] : null
}

/**
 * Clear error for a specific field
 */
export function clearFieldError(errors: FormErrors, fieldName: string): FormErrors {
  const newErrors = { ...errors }
  delete newErrors[fieldName]
  return newErrors
}

/**
 * Common validation schemas
 */
export const commonSchemas = {
  wordContribution: {
    english: {
      required: true,
      minLength: 2,
      maxLength: 50,
      pattern: "englishWord" as const,
    },
    balti: {
      required: true,
      minLength: 2,
      maxLength: 50,
    },
    phonetic: {
      minLength: 2,
      maxLength: 50,
    },
    usageNotes: {
      maxLength: 500,
    },
  },

  userProfile: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 50,
    },
    email: {
      required: true,
      pattern: "email" as const,
    },
    bio: {
      maxLength: 200,
    },
  },

  comment: {
    content: {
      required: true,
      minLength: 1,
      maxLength: 1000,
    },
  },

  password: {
    password: {
      required: true,
      pattern: "password" as const,
    },
    confirmPassword: {
      required: true,
      custom: (value: string) => {
        // This should be validated against password field
        return true
      },
    },
  },
}
