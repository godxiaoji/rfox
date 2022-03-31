export function getEnumsValue<T = string>(enums: T[], value?: unknown): T {
  return enums.includes(value as T) ? (value as T) : enums[0]
}
