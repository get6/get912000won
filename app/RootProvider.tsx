"use client"

import { RecoilRoot } from "recoil"

export default function RootProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return <RecoilRoot>{children}</RecoilRoot>
}
