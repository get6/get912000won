"use client"

import { badgeState } from "@/app/states/badge-state"
import { targetHoursState } from "@/app/states/my-time-state"
import { CheckIcon, ClockIcon } from "@heroicons/react/24/outline"
import { useRecoilValue, useSetRecoilState } from "recoil"

interface Props {
  children: React.ReactNode
}

export default function Badge({ children }: Props) {
  const badge = useRecoilValue(badgeState)
  const setHours = useSetRecoilState(targetHoursState)

  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800 hover:cursor-pointer dark:bg-blue-900  dark:text-blue-300"
      onClick={() => setHours(Number(children))}
    >
      {Number(children) === badge ? (
        <CheckIcon className="h-3.5 w-3.5" />
      ) : (
        <ClockIcon className="h-3.5 w-3.5" />
      )}

      {children}
    </span>
  )
}
