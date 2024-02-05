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
import CheckBox from "./CheckBox"

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

  let touchPointX: number = 0
  let touchPointY: number = 0

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

  const datePickMobile = (day: Date, e: any) => {
    if (!isMobile || !isAvailableDay(day)) return
    if (
      touchPointX !== e.changedTouches[0].clientX ||
      touchPointY !== e.changedTouches[0].clientY
    )
      return
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
    <div>
      <CheckBox
        id="all-dates-select"
        className="justify-end pb-2 pr-2"
        label="모든 날 선택하기"
        checked={selectedDates.length === availableDates.length}
        onChange={() => {
          if (selectedDates.length === availableDates.length) {
            setSelectedDates([])
          } else {
            setSelectedDates(availableDates)
          }
        }}
      />
      <div className="for-mobile max-w-sm rounded-lg bg-gray-50 p-3 py-8 shadow-lg dark:bg-gray-700">
        <h2 className="flex-auto text-center font-medium text-gray-900 dark:text-white">
          🗓️ {format(lastDayOfMonth, "M")}월 남은 날 {availableDates.length}일
        </h2>
        <div className="mt-8 grid grid-cols-7 text-center">
          {weekDays.map((day, index) => (
            <div
              key={index}
              className="text-sm font-semibold leading-6 text-amber-300 dark:text-blue-400"
            >
              {day}
            </div>
          ))}
        </div>
        <div className="mt-2 grid grid-cols-7 text-sm">
          {days.map((day, dayIdx) => (
            <div
              key={day.toString()}
              className={classNames(
                dayIdx === 0 && colStartClasses[getDay(day)],
                "item-center px-0.5 py-0.5"
              )}
            >
              <button
                disabled={!isAvailableDay(day)}
                onTouchStart={(e) => {
                  touchPointX = e.touches[0].clientX
                  touchPointY = e.touches[0].clientY
                }}
                onTouchEnd={(e) => datePickMobile(day, e)}
                onClick={() => datePick(day)}
                className={classNames(
                  !isAvailableDay(day) && "disabled: cursor-default opacity-30",
                  isAvailableDay(day) &&
                    !selectedDates.includes(day) &&
                    "unselected-button",
                  isWeekend(day) && "text-red-500 dark:text-red-500",
                  selectedDates.includes(day) && "selected-button",
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
    </div>
  )
}
