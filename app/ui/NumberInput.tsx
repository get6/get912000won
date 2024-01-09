interface Props {
  className?: string
  id: string
  placeholder?: string
  min?: number
  max?: number
  value?: number
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function NumberInput({
  className,
  id,
  placeholder,
  min,
  max,
  value,
  onChange,
}: Props) {
  return (
    <input
      type="number"
      id={id}
      className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-200 focus:border-yellow-200 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500 ${className}`}
      placeholder={placeholder}
      required
      value={value?.toString()}
      min={min}
      max={max}
      onChange={onChange}
      autoComplete="off"
      inputMode="numeric"
      pattern="[0-9]*"
    />
  )
}
