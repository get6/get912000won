"use client"

import {
  cumulativeHoursState,
  finishTimeState,
} from "@/app/states/my-time-state"
import NumberInput from "@/app/ui/NumberInput"
import { ExclamationCircleIcon } from "@heroicons/react/24/outline"
import { Tooltip } from "flowbite-react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { useEffect } from "react"
import { useRecoilState, useRecoilValue } from "recoil"

export default function CumulativeTimeInput() {
  const searchParams = useSearchParams()
  const [cumulativeHours, setCumulativeHours] =
    useRecoilState(cumulativeHoursState)
  const finishTime = useRecoilValue(finishTimeState)

  const params = new URLSearchParams(searchParams)
  const cumulativeTime = params.get("cumulativeTime")

  useEffect(() => {
    if (cumulativeTime) {
      const hours = Number(cumulativeTime)
      if (isFinite(hours) && hours >= 0) {
        if (hours > finishTime) setCumulativeHours(Number(finishTime))
        else setCumulativeHours(Number(cumulativeTime))
      }
    }
  }, [cumulativeTime, finishTime, setCumulativeHours])

  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={"cumulativeTime"}
        className="flex items-center gap-1 text-sm font-medium text-gray-900 dark:text-white"
      >
        ⏰ 이번달 누적 시간
        <Tooltip
          content={`0-${finishTime} 시간만 입력 가능해요`}
          className="z-[101] text-xs"
        >
          <ExclamationCircleIcon className="h-4 w-4 hover:cursor-pointer" />
        </Tooltip>
      </label>
      <NumberInput
        id="cumulativeTime"
        placeholder="누적 시간"
        value={cumulativeHours}
        min={0}
        max={finishTime}
        onChange={(e) => {
          let value = Number(e.target.value)

          if (value < 0) value = 0
          if (value > finishTime) value = finishTime

          setCumulativeHours(value)
        }}
      />

      <div className="flex flex-col">
        <p className="text-xs text-gray-600 dark:text-gray-500">
          누적 시간은&nbsp;
          <Link
            href="https://24hoursarenotenough.42seoul.kr/"
            target="_blank"
            className="text-yellow-400 hover:underline dark:text-blue-400"
          >
            24HANE
          </Link>
          에서 확인이 가능합니다.
        </p>
      </div>
    </div>
  )
}
