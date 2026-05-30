import {
  ChartNoAxesGantt,
  CopyCheck,
  DiamondPlus,
  MessageSquare,
  ThumbsDown,
  ThumbsUp,
  Users,
} from "lucide-react"
import CardDefault from "./card-default"

const Tabs = () => {
  return (
    <CardDefault>
      <div className="flex w-full">
        <ul className="flex w-full justify-start gap-6 text-sm">
          <li className="flex items-center gap-2">
            <ChartNoAxesGantt size={14} />
            Overview
          </li>
          <li className="flex items-center gap-2">
            <CopyCheck size={14} />
            Reviews
          </li>
          <li className="flex items-center gap-2">
            <Users size={14} />
            Similar
          </li>
          <li className="flex items-center gap-2">
            <DiamondPlus size={14} />
            Compare
          </li>
          <li className="flex items-center gap-2">
            <MessageSquare size={14} />
            Comments (50)
          </li>
        </ul>
        <div className="flex gap-4 text-sm">
          <div className="flex items-center gap-2 rounded-full bg-[#212023] px-2 py-1">
            <ThumbsUp size={14} />
            850
          </div>
          <div className="flex items-center gap-2 rounded-full bg-[#212023] px-2 py-1">
            <ThumbsDown size={14} />
            120
          </div>
        </div>
      </div>
    </CardDefault>
  )
}

export default Tabs
