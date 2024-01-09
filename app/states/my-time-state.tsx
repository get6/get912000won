import { atom, selector } from "recoil"

export const remainingHoursState = selector<number>({
  key: "remainingHoursState",
  get: ({ get }) => {
    const cumulativeTime = get(cumulativeHoursState)
    return 160 - cumulativeTime
  },
})

export const cumulativeHoursState = atom<number>({
  key: "cumulativeHoursState",
  default: 0,
})

export const targetHoursState = atom<number>({
  key: "targetHoursState",
  default: 12,
})
