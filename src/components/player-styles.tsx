import { CircleQuestionMark } from "lucide-react"
import CardDefault from "./card-default"
import PlayerStyleUi from "./ui/player-styles-ui"

const PlayerStyles = () => {
  return (
    <CardDefault>
      <div className="flex flex-col gap-6">
        <div className="flex w-full min-w-45 justify-between text-sm">
          PlayerStyles
          <CircleQuestionMark size={16} strokeWidth={2} />
        </div>
        <div className="grid grid-cols-[1fr_1fr_1fr] justify-items-center gap-2">
          <PlayerStyleUi
            background="svgexport-6.svg"
            photo="svgexport-7.svg"
            title="Placed kick"
          />
          <PlayerStyleUi
            background="svgexport-6.svg"
            photo="svgexport-8.svg"
            title="Foot of wind"
          />
          <PlayerStyleUi
            background="svgexport-6.svg"
            photo="svgexport-9.svg"
            title="Acrobat"
          />
          <PlayerStyleUi
            background="svgexport-11.svg"
            photo="svgexport-12.svg"
            title="Low and direct shot"
          />
          <PlayerStyleUi
            background="svgexport-11.svg"
            photo="svgexport-13.svg"
            title="Technique"
          />
          <PlayerStyleUi
            background="svgexport-11.svg"
            photo="svgexport-14.svg"
            title="Fast"
          />
          <PlayerStyleUi
            background="svgexport-11.svg"
            photo="svgexport-16.svg"
            title="Control"
          />
        </div>
      </div>
    </CardDefault>
  )
}

export default PlayerStyles
