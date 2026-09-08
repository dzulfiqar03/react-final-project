import './App.css'
import AboutUs from './components/pages/AboutUs'
import Button from './components/button'

function App() {


  return (
    <>
    <section id="aboutUs" className="about-us-section">
      <AboutUs />
      <Button href="https://www.example.com"  text="Getting Started" />
    </section>
    </>
  )
}

export default App
