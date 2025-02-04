import { BrowserRouter as Router,  Routes,Route} from "react-router-dom";
import Category from "./pages/Category";
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductDetails from "./pages/Bannerpage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Forgot from "./pages/Forget";
import Slide from "./pages/Slide";
import About from "./pages/About";
import Summa from "./pages/Summa";




function App() {
  return (
      <>
      <Router>
       <Header />
       
        <Routes>
        <Route path="/" element={<Category />} />
         <Route path="/product-details/:productId" element={<ProductDetails />} />
         <Route path="/product/1" element={<ProductDetails />} />

         <Route path="/login" element={<Login />} />
         <Route path="/signup" element={<Signup />} />


         <Route path="/forgot-password" element={<Forgot />} />
   
         <Route path="/product-details/:productId" element={<Slide />} />
         <Route path="/about" element={<About />} />


   
        </Routes>
       <hr/>
       <Footer />
      </Router>

   </>
);
}

export default App;
