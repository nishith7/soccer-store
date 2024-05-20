// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import logo from './logo.svg';
// import './App.css';
// import { Route, Routes } from 'react-router-dom';
// import NavBar from './components/Navbar'
// // import reportWebVitals from './reportWebVitals';
// import Footer from './components/Footer';
// import HeroComponent from './components/HeroComponent';
// import Categories from './components/Categories';
// import DealOftheDay from './components/DealOftheDay';
// import AboutUs from './components/AboutUs';
import { HashRouter } from 'react-router-dom';
import './global.css';
import Router from './Router/Router';

// import AllProductsPage from './components/AllProductsPage';
// import AllProductsPage from './components/AllProductsPage';
// import ProductCard from './components/ProductCard';

function App() {
  return (
   
    
    <HashRouter>
    <Router/>
    </HashRouter>
   
     
    
  //   {/* <div style={{ maxHeight: "100vh", overflowY: "auto" }}>
  //   <NavBar />
  //   <HeroComponent />
  //   <DealOftheDay />
  //   <Categories />
  //   <AboutUs />
  //   <Footer />
  // </div>; */}
    
  );
}

export default App;


// {/* <Router>
//       <Switch>
//         <Route path="/" exact component={ProductCard} />
//         <Route path="/allproducts" component={AllProductsPage} /> {/* Define the route for the other component */}
//         </Switch>
//       </Router> */}


//  {/* <Routes>
//         {/* <Route path="/" element={< />} /> */}
//         {/* <Route path="/allproducts" element={<AllProductsPage />} /> */}
//       </Routes> */}