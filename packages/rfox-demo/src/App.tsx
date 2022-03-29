import { HashRouter } from 'react-router-dom'
import Router from './router'
import Header from './views/Header'

function App() {
  return (
    <HashRouter>
      <Header />
      <Router />
    </HashRouter>
  )
}

export default App
