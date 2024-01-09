import { targetHoursState } from "@/app/states/my-time-state"
import { selector } from "recoil"

export const badgeState = selector<number>({
  key: "badgeState",
  get: ({ get }) => {
    const hours = get(targetHoursState)
    return hours
  },
})
