import DatePicker from "@/app/ui/DatePicker"
import NewDatePicker from "@/app/ui/NewDatePicker"
import Line from "@/app/ui/Line"
import CumulativeTimeInput from "@/app/ui/home/CumulativeTimeInput"
import MyInfo from "@/app/ui/home/MyInfo"
import MyResult from "@/app/ui/home/MyResult"
import TargetTimeInput from "@/app/ui/home/TargetTimeInput"
import SimpleCalendar from "./ui/SimpleCalendar"

export default function Home() {
  const desc = [
    "Hello, 42 SEOUL!",
    "지원금 지급요건을 충족하려는 당신이 자랑스럽습니다! 🙌",
    "이번달 누적 시간 입력 필드에 숫자(Hour) 입력",
    "남은 시간은 입력값에 따라 자동 계산됩니다.",
  ]

  return (
    <main className="flex flex-col flex-1 px-4 gap-3 dark:bg-gray-900">
      <div className="flex flex-col gap-1 items-center">
        {/* 설명 영역 */}
        {desc.map((d, i) => (
          <p key={i} className="text-xs font-extralight dark:text-white">
            {d}
          </p>
        ))}
      </div>
      <div className="flex flex-1 items-center flex-col justify-center">
        <div className="flex flex-col">
          <MyInfo />
          <Line />
          <div className="flex flex-col gap-4">
            {/* 사용자 조작 영역 */}
            <div className="flex justify-center">
              {/*<DatePicker />*/}
              {/*<NewDatePicker />*/}
              <SimpleCalendar />
            </div>
            <Line />
            <div className="flex flex-col gap-4">
              <CumulativeTimeInput />
              <TargetTimeInput />
            </div>
          </div>
          <Line />
          <div className="flex flex-col items-center">
            {/* 계산 결과 영역 */}
            <MyResult />
          </div>
          <Line />
        </div>
      </div>
    </main>
  )
}
