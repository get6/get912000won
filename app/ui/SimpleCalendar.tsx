"use client"

import {
  availableDatesState,
  daysOfMonthState,
  lastDayOfMonthState,
  selectedDatesState,
  todayState,
} from "@/app/states/days-of-month-state"
import {
  format,
  getDay,
  isSameDay,
  isSameMonth,
  isToday,
  isWeekend,
} from "date-fns"
import { useRecoilState, useRecoilValue } from "recoil"

function classNames(...classes: (string | boolean)[]) {
  return classes.filter(Boolean).join(" ")
}

export default function SimpleCalendar() {
  const today = useRecoilValue(todayState)
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
    <div className="pt-5 max-w-sm for-mobile">
      <h2 className="flex-auto font-semibold text-center text-gray-900 dark:text-white">
        🗓️ {format(lastDayOfMonth, "yyyy M")}월: 남은 날 {availableDates.length}
        일
      </h2>
      <div className="grid grid-cols-7 mt-10 text-xs leading-6 text-center text-amber-950 dark:text-yellow-400 font-semibold">
        {weekDays.map((value) => (
          <div>{value}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 mt-2 text-sm">
        {days.map((day, dayIdx) => (
          <div
            key={day.toString()}
            className={classNames(
              dayIdx === 0 && colStartClasses[getDay(day)],
              "py-1.5 px-1 item-center"
            )}
          >
            <button
              type="button"
              disabled={!isAvailableDay(day)}
              onClick={() => datePick(day)}
              className={classNames(
                !isAvailableDay(day) && "disabled: opacity-30 cursor-default",
                isAvailableDay(day) &&
                  "text-gray-900 dark:text-gray-300 betterhover:hover:bg-gray-300 betterhover:hover:dark:bg-gray-500",
                isWeekend(day) && "text-red-600 dark:text-red-500",
                selectedDates.includes(day) &&
                  "bg-emerald-600 dark:bg-orange-500 betterhover:hover:bg-emerald-400 betterhover:hover:dark:bg-orange-400",
                //!isSameDay(day, selectedDay) &&
                //  !isToday(day) &&
                //  !isSameMonth(day, lastDayOfMonth) &&
                //  "text-gray-400",
                "flex h-9 w-9 items-center justify-center rounded-full"
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
