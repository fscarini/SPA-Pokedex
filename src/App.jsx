import { Header } from "./components/header/Header"
import { ThemeProvider } from "./context/ThemeContext"
import { Card } from "./components/card/Card.jsx"

function App() {

  return (
    <ThemeProvider>
      <Header />
    </ThemeProvider>
  )
}

export default App
