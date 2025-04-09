import { useState } from 'react'
import './App.css'
import { Button } from 'components/components/ui/button'
import { ThemeProvider } from 'components/ThemeProvider'
import { ThemeToggle } from 'components/ThemeToggle'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider>
      <ThemeToggle />  
      <h1 className='bg-primary'>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </ThemeProvider>
  )
}

export default App
