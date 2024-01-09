import { atom } from "recoil"

export const targetTimeState = atom<number>({
  key: "targetTimeState",
  default: 12,
})
