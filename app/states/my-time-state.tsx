import { atom, selector } from "recoil"

const FINISH_TIME = 160
export const MAX_TARGET_HOURS = 12

export const finishTimeState = atom<number>({
  key: "finishTimeState",
  default: FINISH_TIME,
})

export const remainingHoursState = selector<number>({
  key: "remainingHoursState",
  get: ({ get }) => {
    const finishTime = get(finishTimeState)
    const cumulativeTime = get(cumulativeHoursState)
    return finishTime - cumulativeTime
  },
})

export const cumulativeHoursState = atom<number>({
  key: "cumulativeHoursState",
  default: 0,
})

export const targetHoursState = atom<number>({
  key: "targetHoursState",
  default: MAX_TARGET_HOURS,
})
