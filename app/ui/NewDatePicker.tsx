"use client"

import { Calendar } from "react-calendar"
import "react-calendar/dist/Calendar.css"
import {
  availableDatesState,
  lastDayOfMonthState,
  selectedDatesState,
  todayState,
} from "@/app/states/days-of-month-state"
import { useTheme } from "next-themes"
import { useRecoilState, useRecoilValue } from "recoil"
import { format } from "date-fns"

export default function NewDatePicker() {
  const { theme } = useTheme()
  const today = useRecoilValue(todayState)
  const lastDayOfMonth = useRecoilValue(lastDayOfMonthState)
  const availableDates = useRecoilValue(availableDatesState)
  const [selectedDates, setSelectedDates] = useRecoilState(selectedDatesState)

  //
  const weekDays = ["일", "월", "화", "수", "목", "금", "토"]
  const months = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]

  return (
    <Calendar
      locale="ko-KO" // use korean
      calendarType="gregory" // start the week with sunday
      minDetail="month" // block to go down to year, decade, so on
      nextLabel={null}
      next2Label={null}
      prevLabel={null}
      prev2Label={null}
      minDate={today}
      maxDate={lastDayOfMonth}
      formatDay={(locale, date) => format(date, "d")}
      formatMonthYear={(locale, date) =>
        `🗓️ ${format(date, "M")}월에 남은 날 ${availableDates.length}일`
      }
      onChange={(date) => {
        if (!date) return setSelectedDates([])
        const dateArray = date instanceof Array ? date : [date]
        const dates: Date[] = []
        dateArray.map((date) => {
          if (date) dates.push(date)
        })
        dates.sort((a, b) => a.getTime() - b.getTime())
        return setSelectedDates(dates)
      }}
    />
  )
}
