"use client"

import {
  availableDatesState,
  daysOfMonthState,
} from "@/app/states/days-of-month-state"
import {
  MAX_TARGET_HOURS,
  cumulativeHoursState,
  finishTimeState,
} from "@/app/states/my-time-state"
import { useRecoilValue } from "recoil"

export default function MyInfo() {
  const daysOfMonth = useRecoilValue(daysOfMonthState)
  const availableDates = useRecoilValue(availableDatesState)
  const cumulativeHours = useRecoilValue(cumulativeHoursState)
  const finishTime = useRecoilValue(finishTimeState)

  const infos = [
    {
      title: "이번달 누적 가능한 총 시간:",
      value: `${daysOfMonth.length * MAX_TARGET_HOURS}H`,
      description: `이번달 전체 요일 * ${MAX_TARGET_HOURS}시간`,
    },
    {
      title: "이번달 채울 수 있는 시간:",
      value: `${availableDates.length * MAX_TARGET_HOURS}H`,
      description: `남은 날짜 * ${MAX_TARGET_HOURS}시간`,
    },
    {
      title: "이번달 남은 내 시간:",
      value: `${finishTime - cumulativeHours}H`,
      description: `${finishTime} - 누적 시간`,
    },
  ]

  return (
    <>
      {infos.map((info, index) => (
        <div
          key={index}
          className="flex items-center justify-center dark:text-white"
        >
          <p className="text-xs font-medium">{info.title}&nbsp;</p>
          <p className="text-sm font-semibold">{info.value}</p>
          <p className="text-xs">&nbsp;({info.description})</p>
        </div>
      ))}
    </>
  )
}
