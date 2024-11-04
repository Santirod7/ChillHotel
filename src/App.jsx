import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Nadvar from './components/common/Nav'
import Futer from './components/common/Footer'
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
