import { cumulativeTimeState } from "@/app/states/cumulative-time-state"
import { targetTimeState } from "@/app/states/target-time-state"
import { selector } from "recoil"

export const remainingTimeState = selector<number>({
  key: "remainingTimeState",
  get: ({ get }) => {
    const targetTime = get(targetTimeState)
    const cumulativeTime = get(cumulativeTimeState)

    const value = 160 - cumulativeTime

    return value
  },
})
