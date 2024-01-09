import GithubIcon from "@/app/ui/social/GithubIcon"
import { DocumentTextIcon } from "@heroicons/react/24/outline"
import { Tooltip } from "flowbite-react"
import Link from "next/link"

export default function Bottom() {
  return (
    <footer className="flex justify-center items-center w-full gap-4">
      <Link href="https://github.com/get6/get912000won" target="_blank">
        <GithubIcon className="w-6 h-6" />
      </Link>
      <Tooltip content="구글 폼 링크로 이동해요!" className="text-xs">
        <Link href="https://forms.gle/RJpPgtjdZh86WgRn6" target="_blank">
          <DocumentTextIcon className="w-6 h-6" />
        </Link>
      </Tooltip>
    </footer>
  )
}
