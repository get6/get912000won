"use client"

import { MAX_TARGET_HOURS, targetHoursState } from "@/app/states/my-time-state"
import Badge from "@/app/ui/Badge"
import NumberInput from "@/app/ui/NumberInput"
import { ExclamationCircleIcon } from "@heroicons/react/24/outline"
import { Tooltip } from "flowbite-react"
import { useRecoilState } from "recoil"

export default function TargetTimeInput() {
  const times = [MAX_TARGET_HOURS, 10, 8, 6]
  const [hours, setHours] = useRecoilState(targetHoursState)

  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={"targetTime"}
        className="flex gap-1 items-center text-sm font-medium text-gray-900 dark:text-white"
      >
        🔥 하루 목표 시간
        <Tooltip
          content={`0-${MAX_TARGET_HOURS} 시간만 입력 가능해요`}
          className="z-[101] text-xs"
        >
          <ExclamationCircleIcon className="w-4 h-4 hover:cursor-pointer" />
        </Tooltip>
      </label>
      <NumberInput
        id="targetTime"
        placeholder="목표 시간"
        value={hours}
        onChange={(e) => {
          let value = Number(e.target.value)

          if (value < 0) value = 0
          if (value > MAX_TARGET_HOURS) value = MAX_TARGET_HOURS

          setHours(value)
        }}
        min={0}
        max={MAX_TARGET_HOURS}
      />
      <div className="flex flex-col gap-2">
        <p className="text-xs text-gray-600 dark:text-gray-500">
          {`최대 인정 시간은 하루에 ${MAX_TARGET_HOURS}시간까지 입니다.`}
        </p>
        <div className="flex gap-1">
          {times.map((time, i) => (
            <Badge key={i}>{time}</Badge>
          ))}
        </div>
      </div>
    </div>
  )
}
