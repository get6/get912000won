interface Props {
  className?: string
  id?: string
  value?: string
  label?: string
  checked?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function CheckBox({
  className,
  id,
  value,
  label,
  checked,
  onChange,
}: Props) {
  return (
    <div className={`flex items-center ${className}`}>
      <input
        type="checkbox"
        id={id}
        className="checkbox h-4 w-4"
        value={value}
        onChange={onChange}
        checked={checked}
      />
      <label
        htmlFor={id}
        className="ms-2 select-none text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {label}
      </label>
    </div>
  )
}
