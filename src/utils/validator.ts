export const validateEmptyField = (value:string, errorMessage: string) => {
    return !value ? errorMessage : undefined 
  }

export const validatePattern = (value: string, pattern: RegExp, errorMessage: string) => {
    return !pattern.test(value) ? errorMessage : undefined
  }