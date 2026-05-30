import Letter from "./components/letter"
import Header from "./components/header"
import PlayerStyles from "./components/player-styles"

export function App() {
  return (
    <div className="flex flex-col gap-6 p-6">
      <Header />
      <section className="flex">
        <Letter />
        <PlayerStyles />
      </section>
    </div>
  )
}

export default App
