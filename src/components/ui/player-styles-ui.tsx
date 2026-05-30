interface PlayerStyleUiProps {
  background: string
  photo: string
  title: string
}

const PlayerStyleUi = ({ background, photo, title }: PlayerStyleUiProps) => {
  return (
    <div className="flex">
      <div className="flex flex-col items-center justify-center">
        <div className="relative h-14 w-14">
          <img
            className="absolute top-0 left-0 h-full w-full object-contain"
            src={background}
            alt="background"
          />

          <img
            className="absolute top-1/2 left-1/2 z-10 w-13 -translate-x-1/2 -translate-y-1/2"
            src={photo}
            alt="icon"
          />
        </div>
        <div className="text-[8px]">{title}</div>
      </div>
    </div>
  )
}

export default PlayerStyleUi
