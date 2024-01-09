import {
  remainingHoursState,
  targetHoursState,
} from "@/app/states/my-time-state"
import { atom, selector } from "recoil"

export const todayState = atom<Date>({
  key: "todayState",
  default: new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate()
  ),
})

export const lastDayOfMonthState = selector<Date>({
  key: "lastDayOfMonthState",
  get: ({ get }) => {
    const today = get(todayState)
    return new Date(
      Number(new Date(today.getFullYear(), today.getMonth() + 1, 1)) - 1
    )
  },
})

export const availableDatesState = selector<Date[]>({
  key: "availableDatesState",
  get: ({ get }) => {
    const today = get(todayState)
    const lastDayOfMonth = get(lastDayOfMonthState)
    const daysOfMonth = get(daysOfMonthState)

    return daysOfMonth.filter((date) => {
      const currentDate = new Date(date)
      return today <= currentDate && currentDate <= lastDayOfMonth
    })
  },
})

export const selectedDatesState = atom<Date[]>({
  key: "selectedDatesState",
  default: availableDatesState,
})

export const selectedDaysState = selector<number>({
  key: "selectedDaysState",
  get: ({ get }) => {
    const selectedDates = get(selectedDatesState)
    return selectedDates.length
  },
})

export const daysOfMonthState = selector<Date[]>({
  key: "daysOfMonthState",
  get: ({ get }) => {
    const today = get(todayState)
    const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1)
    const lastDayOfMonth = get(lastDayOfMonthState)

    const daysOfMonth: Date[] = []
    for (
      let date = new Date(firstDayOfMonth);
      date <= lastDayOfMonth;
      date.setDate(date.getDate() + 1)
    ) {
      daysOfMonth.push(new Date(date))
    }

    return daysOfMonth
  },
})

export const daysOfVisitState = selector<number>({
  key: "daysOfVisitState",
  get: ({ get }) => {
    const remainingHours = get(remainingHoursState)
    const targetHoursPerDay = get(targetHoursState)
    const daysOfVisit = remainingHours / targetHoursPerDay

    return daysOfVisit
  },
})
