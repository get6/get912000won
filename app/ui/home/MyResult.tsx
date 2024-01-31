"use client"

import {
  availableDatesState,
  daysOfVisitState,
  selectedDaysState,
} from "@/app/states/days-of-month-state"
import { remainingHoursState } from "@/app/states/my-time-state"
import Fireworks from "react-canvas-confetti/dist/presets/fireworks"
import { TConductorInstance } from "react-canvas-confetti/dist/types"
import { useRecoilValue } from "recoil"

export default function MyResult() {
  const adjustNum = (num: number) => {
    return num > 0 ? Math.ceil(num) : Math.floor(num)
  }

  const availableDates = useRecoilValue(availableDatesState)
  const selectedDays = adjustNum(useRecoilValue(selectedDaysState))
  const remainingHours = useRecoilValue(remainingHoursState)
  const daysOfVisit = adjustNum(useRecoilValue(daysOfVisitState))
  const availableDays =
    0 <= selectedDays - daysOfVisit ? daysOfVisit : selectedDays - daysOfVisit

  return (
    <div className="flex flex-col gap-2 justify-center w-fit lining-nums">
      {remainingHours === 0 ? (
        <>
          <p className="font-bold text-gray-700 items-start dark:text-gray-400">
            🥳 축하합니다! 🎉
          </p>
          <p className="text-sm text-gray-700 dark:text-gray-400">
            이번달 목표 시간을 달성하셨습니다!
          </p>
          <p className="text-sm text-gray-700 dark:text-gray-400">
            당신이 최고예요! 🤩
          </p>
          <Fireworks
            autorun={{ speed: 3 }}
            onInit={({ conductor }: { conductor: TConductorInstance }) => {
              setTimeout(() => {
                conductor?.pause()
              }, 5000)
            }}
          />
        </>
      ) : 0 < selectedDays && isFinite(availableDays) ? (
        <>
          <p className="font-bold text-gray-700 items-start dark:text-gray-400">
            😯 결과는...
          </p>
          <div className="flex flex-col gap-1">
            <div className="flex">
              <p className="text-sm text-gray-700 dark:text-gray-400 font-semibold">
                {selectedDays}일
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-400">
                &nbsp;동안&nbsp;
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-400 font-semibold">
                {remainingHours}시간
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-400">
                을 채울려면
              </p>
            </div>
            {0 <= availableDays ? (
              <span className="flex items-baseline">
                <p className="text-lg text-gray-700 font-bold dark:text-white">
                  {daysOfVisit}일
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-400">
                  을 와야 합니다. 😃
                </p>
              </span>
            ) : (
              <span className="flex flex-col">
                <span className="flex items-baseline">
                  <p className="text-lg text-gray-700 font-bold dark:text-white">
                    {selectedDays}일
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-400">
                    &nbsp;하고도
                  </p>
                  <p className="text-lg text-gray-700 font-bold dark:text-white">
                    &nbsp;{Math.abs(availableDays)}일
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-400">
                    을 와야 합니다. 😲
                  </p>
                </span>
                {availableDates.length <
                  selectedDays + Math.abs(availableDays) && (
                  <p className="text-sm text-gray-700 dark:text-gray-400">
                    (근데 이건 불가능한데요... 😥)
                  </p>
                )}
              </span>
            )}
          </div>
        </>
      ) : (
        <div className="flex">
          <p className="text-sm text-gray-700 dark:text-gray-400">
            {isFinite(availableDays)
              ? "😰 날짜를 선택해주세요."
              : "🤯 목표 시간을 바꿔주세요."}
          </p>
        </div>
      )}
    </div>
  )
}
