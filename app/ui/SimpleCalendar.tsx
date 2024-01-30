"use client"

import {
  availableDatesState,
  daysOfMonthState,
  lastDayOfMonthState,
  selectedDatesState,
} from "@/app/states/days-of-month-state"
import { format, getDay, isSameDay, isWeekend } from "date-fns"
import { isMobile } from "react-device-detect"
import { useRecoilState, useRecoilValue } from "recoil"

function classNames(...classes: (string | boolean)[]) {
  return classes.filter(Boolean).join(" ")
}

export default function SimpleCalendar() {
  const daysOfMonth = useRecoilValue(daysOfMonthState)
  const lastDayOfMonth = useRecoilValue(lastDayOfMonthState)
  const availableDates = useRecoilValue(availableDatesState)
  const [selectedDates, setSelectedDates] = useRecoilState(selectedDatesState)

  const days = daysOfMonth
  const weekDays = ["일", "월", "화", "수", "목", "금", "토"]
  const colStartClasses = [
    "",
    "col-start-2",
    "col-start-3",
    "col-start-4",
    "col-start-5",
    "col-start-6",
    "col-start-7",
  ]

  const isAvailableDay = (day: Date) => {
    return availableDates.includes(day)
  }

  const datePick = (day: Date) => {
    if (isMobile) return
    const dates = selectedDates.filter((e) => !isSameDay(e, day))
    const alreadyPickedDate = selectedDates.find((e) => isSameDay(e, day))
    if (alreadyPickedDate) {
      dates.sort((a, b) => a.getTime() - b.getTime())
      return setSelectedDates(dates)
    } else {
      dates.push(day)
      dates.sort((a, b) => a.getTime() - b.getTime())
      return setSelectedDates(dates)
    }
  }

  const datePickMobile = (day: Date) => {
    if (!isMobile || !isAvailableDay(day)) return
    const dates = selectedDates.filter((e) => !isSameDay(e, day))
    const alreadyPickedDate = selectedDates.find((e) => isSameDay(e, day))
    if (alreadyPickedDate) {
      dates.sort((a, b) => a.getTime() - b.getTime())
      return setSelectedDates(dates)
    } else {
      dates.push(day)
      dates.sort((a, b) => a.getTime() - b.getTime())
      return setSelectedDates(dates)
    }
  }

  return (
    <div className="py-8 p-3 max-w-sm for-mobile bg-gray-50 dark:bg-gray-700 shadow-lg rounded-lg">
      <h2 className="flex-auto text-center text-gray-900 dark:text-white">
        🗓️ {format(lastDayOfMonth, "yyyy M")}월: 남은 날 {availableDates.length}
        일
      </h2>
      <div
        className="grid grid-cols-7 mt-10 text-xs leading-6\
          text-center text-amber-600 dark:text-blue-400 font-semibold"
      >
        {weekDays.map((value, index) => (
          <div key={index}>{value}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 mt-2 text-sm">
        {days.map((day, dayIdx) => (
          <div
            key={day.toString()}
            className={classNames(
              dayIdx === 0 && colStartClasses[getDay(day)],
              "px-0.5 item-center"
            )}
          >
            <button
              type="button"
              disabled={!isAvailableDay(day)}
              onTouchEnd={() => datePickMobile(day)}
              onClick={() => datePick(day)}
              className={classNames(
                !isAvailableDay(day) && "disabled: opacity-30 cursor-default",
                isAvailableDay(day) &&
                  !selectedDates.includes(day) &&
                  "text-gray-900 dark:text-gray-300\
                  betterhover:hover:bg-gray-300 betterhover:hover:dark:bg-gray-500",
                isWeekend(day) && "text-red-600 dark:text-red-500",
                selectedDates.includes(day) &&
                  "bg-amber-500 text-gray-100 dark:bg-blue-600\
                  betterhover:hover:bg-amber-400 betterhover:hover:dark:bg-blue-500",
                "flex h-9 w-9 items-center justify-center rounded-lg font-semibold"
              )}
            >
              <time dateTime={format(day, "yyyy-MM-dd")}>
                {format(day, "d")}
              </time>
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

// bg-gray-50 border border-gray-300 text-gray-900 text-sm
// rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5
// dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
// dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
