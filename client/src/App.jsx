import { Routes, Route } from 'react-router-dom'

import Nav from './components/nav/Nav'
import MainPage from './components/main-page/MainPage'

function App() {
  return (
    <>
      <div className="body">
        <div className="page main-menu">
          <Nav />

          <Routes>
            <Route path='/' element={<MainPage />} />
          </Routes>

        </div>
      </div>
    </>
  )
}

export default App
