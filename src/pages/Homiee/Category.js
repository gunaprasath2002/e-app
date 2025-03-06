import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './category.css';

import Banner from "../Home";
import Slide from "../Slide";
import Categories from "./Cate";
import Products from "./Products";
import Products1 from "./Products1";
import Products2 from "./Products2";
import Products3 from "./Products3";
import Productss from "./Productss";
import Banners from "./Banners";
import Recent from "./Recentv";
// import Summa from "../Summa";


const App= () => {
  
  return (
    <>
      <Banner />
        <hr />
     <Categories />
     {/* <Summa />   */}
     <Products />
        
     <Products1 />
        <br />
     <Slide />
        
     <Products2 />
     
     <Productss />

     <Products3 />
        
     <Banners />

     <Recent />
   
       
    </>
  );
};

export default App;
