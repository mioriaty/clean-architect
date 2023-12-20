import '@/presentation/assets/styles/App.css'
import { ThemeProvider } from '@/presentation/providers/theme.provider'
import { AppRoutes } from '@/routes'

function App() {
  return (
    <ThemeProvider>
      <AppRoutes />
    </ThemeProvider>
  )
}

export default App
