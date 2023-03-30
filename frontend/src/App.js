import './App.css';
import LandingPage from './pages/LandingPage'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HomeUser from './pages/user/Home'
import HomeOwner from './pages/restaurant_owner/Home'
import Menu from './pages/user/Menu';
import Gallery from './pages/user/Gallery';
import DetailsOfItem from './pages/user/DetailsOfItem';

function App() {
  return (
   <>
    

     <BrowserRouter>
    
       <Routes>

        <Route path="/" element={<LandingPage/>} />
        <Route path="/user" element={<HomeUser/>} />
        <Route path="/owner" element={<HomeOwner/>} />

         {/* user side routes */}
        
         <Route path='/userMenu' element={<Menu/>} />
         <Route path='/gallery' element={<Gallery/>} />
         <Route path='/userMenu/menu/:id' element={<DetailsOfItem/>}/>
         {/* user side routes ends */}
         
        </Routes>
     </BrowserRouter>
   </>
  );
}

export default App;
