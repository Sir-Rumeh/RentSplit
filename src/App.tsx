import './App.css'
// import { Button } from 'components/components/ui/button'
import { ThemeProvider } from 'components/ThemeProvider'
import { ThemeToggle } from 'components/ThemeToggle'
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <ThemeProvider>
        <ThemeToggle />  
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
