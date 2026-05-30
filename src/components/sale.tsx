import { ChevronDown, TrendingUp } from "lucide-react"
import CardDefault from "./card-default"

const Sale = () => {
  return (
    <CardDefault>
      <div className="grid h-full grid-rows-[auto_1fr_auto]">
        <div className="flex justify-between gap-2">
          <div className="flex h-fit w-fit items-center justify-center rounded-full bg-[#212023] px-2 py-1">
            <img className="h-5 w-5" src="/xbox.png" alt="xbox" />
            <ChevronDown strokeWidth={1.4} />
          </div>
          <div className="flex items-center gap-2 text-sm text-[#68ce6f]">
            <TrendingUp size={16} strokeWidth={2} />
            136K
          </div>
        </div>
        <div className="flex h-full w-full items-center justify-center">
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center gap-1">
              <img className="w-12" src="FC-Coins.png" alt="coins" />
              <span className="text-[26px] font-bold">2,759,000</span>
            </div>
            <div className="text-xs text-muted-foreground">
              Update 2 min ago
            </div>
          </div>
        </div>
        <div>
          <div className="flex w-full">
            <div className="relative left-[25%] mb-2 -translate-x-1/2 rounded-full bg-[#212023] px-2 py-1 text-xs">
              PR: 25%
              <div className="absolute -bottom-1 left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 bg-[#212023]"></div>
            </div>
          </div>
          <div className="flex">
            <div className="flex h-2 w-[25%] bg-white"></div>
            <div className="flex h-2 w-[75%] bg-[#333335]"></div>
          </div>
          <div className="flex text-xs">
            <div className="mr-14">PR: 184,000</div>
            <div>3,550,00</div>
          </div>
        </div>
      </div>
    </CardDefault>
  )
}

export default Sale
