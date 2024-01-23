"use client"

import {
  availableDatesState,
  lastDayOfMonthState,
  selectedDatesState,
  todayState,
} from "@/app/states/days-of-month-state"
import { useTheme } from "next-themes"
import { HTMLAttributes } from "react"
import { Calendar, DateObject } from "react-multi-date-picker"
import "react-multi-date-picker/styles/backgrounds/bg-dark.css"
import "react-multi-date-picker/styles/colors/yellow.css"
import "react-multi-date-picker/styles/layouts/mobile.css"
import { useRecoilState, useRecoilValue } from "recoil"

export default function DatePicker() {
  const { theme } = useTheme()
  const today = useRecoilValue(todayState)
  const lastDayOfMonth = useRecoilValue(lastDayOfMonthState)
  const availableDates = useRecoilValue(availableDatesState)
  const [selectedDates, setSelectedDates] = useRecoilState(selectedDatesState)

  const changeWeekdayProps = ({
    date,
  }: {
    date: DateObject
    selectedDate: DateObject | DateObject[]
    currentMonth: object
    isSameDate(arg1: DateObject, arg2: DateObject): boolean
  }) => {
    let props: HTMLAttributes<HTMLSpanElement> = {}
    let isWeekend: boolean = [0, 6].includes(date.weekDay.index)

    if (isWeekend) props.className = "highlight-red"
    return props
  }
  const weekDays = ["일", "월", "화", "수", "목", "금", "토"]
  const months = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]

  return (
    <Calendar
      className={`rmdp-mobile yellow ${theme === "dark" && "bg-dark"}`}
      buttons={false}
      value={selectedDates}
      highlightToday={false}
      onChange={(date) => {
        if (!date) return setSelectedDates([])
        const dateArray = date instanceof Array ? date : [date]
        const dates: Date[] = []
        dateArray.map((date) => {
          if (date) dates.push(date.toDate())
        })
        dates.sort((a, b) => a.getTime() - b.getTime())
        return setSelectedDates(dates)
      }}
      multiple
      disableMonthPicker
      disableYearPicker
      showOtherDays
      minDate={today}
      maxDate={lastDayOfMonth}
      weekDays={weekDays}
      months={months}
      formatMonth={(month) =>
        `🗓️ ${month}월에 남은 날 ${availableDates.length}일`
      }
      hideYear
      mapDays={changeWeekdayProps}
    />
  )
}
