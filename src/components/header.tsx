import { Search } from "lucide-react"

const Header = () => {
  return (
    <header className="flex w-full justify-between">
      <div className="flex flex-row gap-6">
        <div className="flex items-center">
          <img
            style={{ width: "100px" }}
            src="/EAFC26_SEASONAL_SOLID_CHALK_WHITE_HORIZONTAL_RGB.png"
            alt="logo-fc26"
          />
        </div>
        <div className="flex h-fit min-w-60 flex-row items-center gap-2 rounded-full bg-[#161618] px-4 py-2 text-muted-foreground">
          <Search size={16} strokeWidth={3} />
          <span className="text-sm">Search for players</span>
        </div>
        <ul className="flex items-center gap-4 text-sm">
          <li>Players</li>
          <li>Squad Builder</li>
          <li>SBCs</li>
          <li>Evolutions</li>
          <li>Market</li>
        </ul>
      </div>
      <div>
        <img
          className="w-8 rounded-full"
          src="95ec1e66-1937-4784-a552-fe89d032123d.png"
          alt="photo-user"
        />
      </div>
    </header>
  )
}

export default Header
