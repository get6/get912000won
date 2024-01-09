import { targetTimeState } from "@/app/states/target-time-state"
import { selector } from "recoil"

export const badgeState = selector<number>({
  key: "badgeState",
  get: ({ get }) => {
    const time = get(targetTimeState)
    return time
  },
})
