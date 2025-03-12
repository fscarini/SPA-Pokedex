import { Header } from "./components/header/Header"
import { ThemeProvider } from "./context/ThemeContext"

function App() {

  return (
    <ThemeProvider>
      <Header />
    </ThemeProvider>
  )
}

export default App
