export const THEME_COLORS = {
  error: '#f00000',
  success: '#007000',
  brightSuccess: "#04fd81",
  neutral: '#fdfdfd',
  warning: '#ffa500',
  info: '#0077ff',
} as const

export const FORM_COLORS = {
  error: THEME_COLORS.error,
  success: THEME_COLORS.success,
  brightSuccess: THEME_COLORS.brightSuccess,
  inputFilled: '#fdfdfdbb',
  inputEmpty: 'transparent',
} as const