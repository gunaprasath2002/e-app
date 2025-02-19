import { BrowserRouter as Router,  Routes,Route} from "react-router-dom";
import Category from "./pages/Homiee/Category";
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductDetails from "./pages/Bannerpage";
import Login from "./pages/Loginn/Login";
import Signup from "./pages/Loginn/Signup";
import Forgot from "./pages/Loginn/Forget";
import Slide from "./pages/Slide";
import About from "./pages/about/About";
import Contact from "./pages/about/Contactus"; 




function App() {
  return (
      <>
      <Router>
       <Header />
       <br/>
        <Routes>
        <Route path="/" element={<Category />} />
         <Route path="/product-details/:productId" element={<ProductDetails />} />
         <Route path="/product/1" element={<ProductDetails />} />

         <Route path="/login" element={<Login />} />
         <Route path="/signup" element={<Signup />} />
         <Route path="/forgot-password" element={<Forgot />} />
   
         <Route path="/product-details/:productId" element={<Slide />} />
         <Route path="/about" element={<About />} />
         <Route path="/contact" element={<Contact />} />


   
        </Routes>
       <hr/>
       <Footer />
      </Router>

   </>
);
}

export default App;
