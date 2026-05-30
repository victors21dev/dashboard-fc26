import Letter from "./components/letter"
import Header from "./components/header"

export function App() {
  return (
    <div className="flex flex-col p-6">
      <Header />
      <Letter />
    </div>
  )
}

export default App
