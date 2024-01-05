import About from "./components/About";
import Header from "./components/Header"
import NavBar from "./components/Navbar"
import Work from "./components/Work"
import Contact from "./components/Contact"
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <div className=" bg-header"> 
        <NavBar />
        <Header />
        <About />
        <Work />
        <Contact />
        <Toaster />

      </div>
    </>
  )
}

export default App;
