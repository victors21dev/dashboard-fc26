import Letter from "./components/letter"
import Header from "./components/header"
import PlayerStyles from "./components/player-styles"
import Sale from "./components/sale"
import Tabs from "./components/tabs"

export function App() {
  return (
    <div className="flex flex-col gap-6 p-6">
      <Header />
      <section className="flex w-full">
        <div className="flex w-full items-center">
          <Letter />
          <div className="ml-4 flex w-full flex-col gap-2">
            <div className="flex w-full gap-2">
              <Sale />
              <PlayerStyles />
            </div>
            <Tabs />
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
