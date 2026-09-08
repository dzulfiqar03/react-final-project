import './App.css'
import AboutUs from './components/pages/AboutUs'
import Button from './components/button'

function App() {


  return (
    <>
    <section id="aboutUs">
      <AboutUs />
      <Button href="https://www.example.com"  text="Getting Started" />
    </section>
    </>
  )
}

export default App
