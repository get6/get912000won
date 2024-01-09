import NumberInputs from "@/app/home/Inputs"
import DatePicker from "@/app/ui/DatePicker"
import Line from "@/app/ui/Line"
import { Suspense } from "react"

export default function Home() {
  const desc = [
    "Hello, 42 SEOUL!",
    "지원금을 충족한 당신이 자랑스럽습니다! 🙌",
    "이번달 누적 시간 입력 필드에 숫자(Hour) 입력",
    "남은 시간은 입력값에 따라 자동 계산됩니다.",
  ]

  return (
    <main className="flex flex-1 h-full flex-col items-center justify-between px-4 gap-6">
      <div className="flex flex-col gap-1 items-center">
        {/* 설명 영역 */}
        {desc.map((d, i) => (
          <p key={i} className="text-xs font-extralight">
            {d}
          </p>
        ))}
      </div>
      <div className="flex flex-col">
        {/* 사용자 조작 영역 */}
        <div className="flex items-center">
          <p className="text-sm font-medium">
            이번달에 채울 수 있는 시간:&nbsp;
          </p>
          <p className="font-bold">300H (남은 날짜 * 12시간)</p>
        </div>
        <div className="flex items-center">
          <p className="text-sm font-medium">이번달 남은 내 시간:&nbsp;</p>
          <p className="font-bold">120H (160 - 누적 시간)</p>
        </div>
        <Line />
        <div className="flex flex-col gap-4">
          <div className="flex justify-center">
            <Suspense
              fallback={
                <div className="w-[256px] h-[300px] animate-pulse rounded-md bg-gray-200" />
              }
            >
              <DatePicker />
            </Suspense>
          </div>
          <NumberInputs />
        </div>

        <Line />
      </div>
      <div className="flex">{/* 계산 결과 영역 */}</div>
    </main>
  )
}
