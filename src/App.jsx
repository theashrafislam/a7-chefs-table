import './App.css'
import Banner from './Banner'
import MainSection from './MainSection'
import NavBar from './NavBar'

function App() {

  return (
    <>
      <header className='container mx-auto'>
        <NavBar></NavBar>
        <Banner></Banner>
      </header>
      <main id='main-container' className='container mx-auto'>
          <MainSection></MainSection>
      </main>
    </>
  )
}

export default App
