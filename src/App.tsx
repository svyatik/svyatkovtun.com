import { ThemeContext } from './contexts/theme-context'

import useLocalStorage from 'use-local-storage'
import Home from './pages/home'

function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const [ theme, setTheme ] = useLocalStorage('theme', defaultDark ? 'dark' : 'light')

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }

  return (
    <div className="App" data-theme={theme}>
      <ThemeContext.Provider value={{ theme, switchTheme }}>
        <Home />
      </ThemeContext.Provider>
    </div>
  )
}

export default App
