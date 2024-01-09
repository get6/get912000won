import Badge from "@/app/ui/Badge"
import NumberInput from "@/app/ui/NumberInput"

import { ExclamationCircleIcon } from "@heroicons/react/24/outline"
import { Tooltip } from "flowbite-react"
import Link from "next/link"

export default function NumberInputs() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <label
          htmlFor={"cumulativeTime"}
          className="flex gap-1 items-center text-sm font-medium text-gray-900 dark:text-white"
        >
          ⏰ 이번달 누적 시간
          <Tooltip
            content="0-160 시간만 입력이 가능합니다"
            className="z-[101] text-xs"
          >
            <ExclamationCircleIcon className="w-4 h-4 hover:cursor-pointer" />
          </Tooltip>
        </label>
        <NumberInput
          id="cumulativeTime"
          placeholder="누적 시간"
          defaultValue={0}
          min={0}
          max={160}
        />

        <div className="flex flex-col">
          <p className="text-xs text-gray-600 dark:text-gray-500">
            누적 시간은&nbsp;
            <Link
              href="https://24hoursarenotenough.42seoul.kr/"
              target="_blank"
              className="text-yellow-400 hover:underline"
            >
              24HANE
            </Link>
            에서 확인이 가능합니다.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor={"targetTime"}
          className="flex gap-1 items-center text-sm font-medium text-gray-900 dark:text-white"
        >
          🔥 하루 목표 시간
          <Tooltip
            content="1-12 시간만 입력이 가능합니다"
            className="z-[101] text-xs"
          >
            <ExclamationCircleIcon className="w-4 h-4 hover:cursor-pointer" />
          </Tooltip>
        </label>
        <NumberInput
          id="targetTime"
          placeholder="누적 시간"
          defaultValue={12}
          min={1}
          max={12}
        />
        <div className="flex flex-col gap-2">
          <p className="text-xs text-gray-600 dark:text-gray-500">
            최대 인정 시간은 하루에 12시간까지 입니다.
          </p>
          <div className="flex gap-2">
            <Badge>12</Badge>
            <Badge>10</Badge>
            <Badge>8</Badge>
            <Badge>6</Badge>
          </div>
        </div>
      </div>
    </div>
  )
}
