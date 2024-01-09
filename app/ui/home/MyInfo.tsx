"use client"

import { cumulativeTimeState } from "@/app/states/cumulative-time-state"
import {
  availableDatesState,
  daysOfMonthState,
} from "@/app/states/days-of-month-state"
import { useRecoilValue } from "recoil"

export default function MyInfo() {
  const daysOfMonth = useRecoilValue(daysOfMonthState)
  const availableDates = useRecoilValue(availableDatesState)
  const cumulativeTime = useRecoilValue(cumulativeTimeState)

  const infos = [
    {
      title: "이번달 누적 가능한 총 시간",
      value: `${daysOfMonth.length * 12}H`,
      description: "이번달 전체 요일 * 12시간",
    },
    {
      title: "이번달 채울 수 있는 시간",
      value: `${availableDates.length * 12}H`,
      description: "남은 날짜 * 12시간",
    },
    {
      title: "이번달 남은 내 시간",
      value: `${160 - cumulativeTime}H`,
      description: "160 - 누적 시간",
    },
  ]

  return (
    <>
      {infos.map((info, index) => (
        <div key={index} className="flex items-center">
          <p className="text-xs font-medium">{info.title}&nbsp;</p>
          <p className="text-sm font-semibold">{info.value}</p>
          <p className="text-xs">&nbsp;({info.description})</p>
        </div>
      ))}
    </>
  )
}
