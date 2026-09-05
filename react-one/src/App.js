
import './App.css';
import ApiComp from './Components/ApiComp';
import ClassComp from './Components/ClassComp';
import Comp1 from "./Components/Comp1";
import FormHandling from './Components/FormHandling';
import FunctionalComp from './Components/FunctionalComp';
import { UserProvider } from "./Components/UserContext"
import CompA from "./Components/CompA"
import { Route, Routes, useParams } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from "./Components/Contact"
import Pagenotfound from './Components/Pagenotfound';
import SingleProduct from './Components/SingleProduct';

/* import img1 from "./imgs/cat1.jpg"
import img2 from "./imgs/cat2.webp"
import img3 from "./imgs/cat3.webp" */

function App() {


  return (
    <div className=''>

      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<Pagenotfound />} />
        <Route path='/products' element={<ApiComp />} />
        <Route path='/products/:id' element={<SingleProduct />} />
      </Routes>

      {/*   <UserProvider value="fedo" >
        <CompA />
      </UserProvider > */}

      {/* <ApiComp /> */}
      {/* <FormHandling /> */}
      {/* <FunctionalComp /> */}
      {/* <ClassComp /> */}
      {/*   
      <Comp1 img={img1} name="cat1" desc="cat1 this is my cat to test"/>
      <Comp1 img={img2} name="cat2" desc="cat2 this is my cat to test"/>
      <Comp1 img={img3} name="cat3" desc="cat3 this is my cat to test"/>
       */}
    </div>
  );
}

export default App;
