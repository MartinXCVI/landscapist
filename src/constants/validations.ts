export const REGEX_PATTERNS = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^\+?[\d\s\-()]+$/,
} as const

export const VALIDATION_RULES = {
  fullname: { min: 3, max: 75 },
  email: { pattern: REGEX_PATTERNS.email },
  phone: { min: 7, max: 15 },
  subject: { min: 6, max: 70 },
  message: { min: 30, max: 500 },
} as const