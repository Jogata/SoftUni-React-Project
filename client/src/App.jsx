import MainPage from './components/main-page/MainPage'
import Nav from './components/nav/Nav'

function App() {
  return (
    <>
      <div className="body">
        <div className="page main-menu">
          <Nav />
          <MainPage />
        </div>
      </div>
    </>
  )
}

export default App
