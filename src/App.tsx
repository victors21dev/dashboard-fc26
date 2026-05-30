import Letter from "./components/letter"
import Header from "./components/header"
import PlayerStyles from "./components/player-styles"
import Sale from "./components/sale"

export function App() {
  return (
    <div className="flex flex-col gap-6 p-6">
      <Header />
      <section className="flex">
        <Letter />
        <div className="ml-4 flex gap-2">
          <Sale />
          <PlayerStyles />
        </div>
      </section>
    </div>
  )
}

export default App
