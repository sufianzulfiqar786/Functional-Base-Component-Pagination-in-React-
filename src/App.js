import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './Pages/Home';


function App() {
  return (
   
<>


<BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        {/* <LastMainSlider/> */}
        {/* <Footer /> */}
      </BrowserRouter>
      


</>

  );
}

export default App;
