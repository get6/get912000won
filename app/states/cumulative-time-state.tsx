import { atom } from "recoil"

export const cumulativeTimeState = atom<number>({
  key: "cumulativeTimeState",
  default: 0,
})
