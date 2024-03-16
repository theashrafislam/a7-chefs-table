import { useEffect, useState } from 'react'
import './App.css'
import Banner from './Banner'
import MainSection from './MainSection'
import NavBar from './NavBar'

function App() {

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('./FakeData.json')
    .then(res => res.json())
    .then(data => setRecipes(data))
  }, [])

  // console.log(recipes)

  return (
    <>
      <header className='container mx-auto'>
        <NavBar></NavBar>
        <Banner></Banner>
      </header>
      <main id='main-container' className='container mx-auto'>
        <MainSection recipesItem={recipes}></MainSection>
      </main>
    </>
  )
}

export default App
