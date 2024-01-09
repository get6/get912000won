interface Props {
  className?: string
  id: string
  placeholder?: string
  defaultValue?: number
  min?: number
  max?: number
}

export default function NumberInput({
  className,
  id,
  placeholder,
  defaultValue,
  min,
  max,
}: Props) {
  return (
    <input
      type="number"
      id={id}
      className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-200 focus:border-yellow-200 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500 ${className}`}
      placeholder={placeholder}
      required
      defaultValue={defaultValue}
      min={min}
      max={max}
    />
  )
}
