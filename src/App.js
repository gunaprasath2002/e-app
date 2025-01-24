import { BrowserRouter as Router,  Routes,Route} from "react-router-dom";
import Category from "./pages/Category";
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductDetails from "./pages/Bannerpage";




function App() {
  return (
      <>
      <Router>
       <Header />
        <Routes>
         <Route path="/product-details/:productId" element={<ProductDetails />} />
        </Routes>
       <Category />
       <Footer />
      </Router>

   </>
);
}

export default App;
