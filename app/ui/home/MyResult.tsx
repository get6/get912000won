"use client"

import {
  availableDatesState,
  daysOfVisitState,
  selectedDaysState,
} from "@/app/states/days-of-month-state"
import { remainingHoursState } from "@/app/states/my-time-state"
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
    selectedDays - daysOfVisit >= 0 ? daysOfVisit : selectedDays - daysOfVisit

  return (
    <div className="flex flex-col gap-2 justify-center w-fit lining-nums">
      {0 < selectedDays ? (
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
            😰 날짜를 선택해주세요.
          </p>
        </div>
      )}
    </div>
  )
}
