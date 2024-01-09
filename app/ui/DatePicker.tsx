"use client"

import { useEffect, useState } from "react"
import { Calendar, DateObject } from "react-multi-date-picker"
import "react-multi-date-picker/styles/colors/yellow.css"

export default function DatePicker() {
  const [today, setToday] = useState<Date | null>(null)

  useEffect(() => {
    setToday(new Date())
  }, [])

  if (!today) return null

  const lastDayOfMonth = new Date(
    Number(new Date(today.getFullYear(), today.getMonth() + 1, 1)) - 1
  )
  const availableDates = []
  for (
    let date = new Date(today);
    date <= lastDayOfMonth;
    date.setDate(date.getDate() + 1)
  ) {
    availableDates.push(new Date(date))
  }

  const changeWeekdayProps = ({
    date,
  }: {
    date: DateObject
    selectedDate: DateObject | DateObject[]
    currentMonth: object
    isSameDate(arg1: DateObject, arg2: DateObject): boolean
  }) => {
    let props = {}
    let isWeekend = [0, 6].includes(date.weekDay.index)
    if (isWeekend) props.className = " highlight-red"
    return props
  }
  const weekDays = ["일", "월", "화", "수", "목", "금", "토"]
  const months = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]

  return (
    today && (
      <Calendar
        buttons={false}
        value={availableDates}
        highlightToday={false}
        onChange={(date) => console.log(date)}
        multiple
        disableMonthPicker
        disableYearPicker
        showOtherDays
        minDate={today}
        maxDate={lastDayOfMonth}
        weekDays={weekDays}
        months={months}
        formatMonth={(month, year) =>
          `🗓️ 이번달 ${month}월에 남은 날 ${availableDates.length}일`
        }
        hideYear
        className="yellow"
        mapDays={changeWeekdayProps}
      />
    )
  )
}
