import { BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Category from "./pages/Category";
import './App.css';

import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
  return (
      <>
      
      
      <Router>
         <Header />
      
      <Category />
      <Footer />
      </Router>
   </>
        );
}

export default App;
