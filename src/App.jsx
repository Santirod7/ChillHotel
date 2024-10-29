import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Nadvar from './nav'
import Futer from './Footer'
import Nosotros from './Nosotros'
function App() {

  return (
    <>
    <nav><Nadvar></Nadvar></nav>
    <main> <Nosotros></Nosotros></main>
     <footer><Futer></Futer></footer>
    </>
  )
}

export default App
