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
          <p className="font-bold text-gray-700 items-start dark:text-gray-500">
            🫣 결과는...
          </p>
          <div className="flex flex-col gap-1">
            <p className="text-sm text-gray-700 dark:text-gray-500">
              <span className="font-semibold">{selectedDays}일</span>
              &nbsp;동안&nbsp;
              <span className="font-semibold">{remainingHours}시간</span>을
              채울려면
            </p>

            {0 <= availableDays ? (
              <span className="flex items-baseline">
                <p className="text-lg text-gray-700 font-bold dark:text-gray-500">
                  {daysOfVisit}일
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-500">
                  을 와야 합니다. 😃
                </p>
              </span>
            ) : (
              <span className="flex flex-col">
                <span className="flex items-baseline">
                  <p className="text-lg text-gray-700 font-bold dark:text-gray-500">
                    {selectedDays}일
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-500">
                    &nbsp;하고도
                  </p>
                  <p className="text-lg text-gray-700 font-bold dark:text-gray-500">
                    &nbsp;{Math.abs(availableDays)}일
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-500">
                    을 와야 합니다. 😲
                  </p>
                </span>
                {availableDates.length <
                  selectedDays + Math.abs(availableDays) && (
                  <p className="text-sm text-gray-700 dark:text-gray-500">
                    (근데 이건 불가능한데요... 🥹)
                  </p>
                )}
              </span>
            )}
          </div>
        </>
      ) : (
        <div className="flex flex-col gap-1">
          <p className="text-sm text-gray-700 dark:text-gray-500">
            😰 날짜를 선택해주세요.
          </p>
        </div>
      )}
    </div>
  )
}
