import { MouseEventHandler } from "react"

interface Props {
  children: React.ReactNode
  onClick?: MouseEventHandler<HTMLSpanElement> | undefined
}

export default function Badge({ children, onClick }: Props) {
  return (
    <span
      className="bg-yellow-100 text-yellow-800 text-xs inline-flex items-center font-medium px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300 hover:cursor-pointer"
      onClick={onClick}
    >
      <svg
        className="w-2.5 h-2.5 me-1.5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z" />
      </svg>
      {children}
    </span>
  )
}
