"use client"

import { badgeState } from "@/app/states/badge-state"
import { targetTimeState } from "@/app/states/target-time-state"
import { CheckIcon, ClockIcon } from "@heroicons/react/24/outline"
import { useRecoilValue, useSetRecoilState } from "recoil"

interface Props {
  children: React.ReactNode
}

export default function Badge({ children }: Props) {
  const badge = useRecoilValue(badgeState)
  const setTime = useSetRecoilState(targetTimeState)

  return (
    <span
      className="bg-yellow-100 text-yellow-800 text-xs inline-flex items-center font-medium px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300 hover:cursor-pointer gap-1.5"
      onClick={() => setTime(Number(children))}
    >
      {Number(children) === badge ? (
        <CheckIcon className="w-3.5 h-3.5" />
      ) : (
        <ClockIcon className="w-3.5 h-3.5" />
      )}

      {children}
    </span>
  )
}
