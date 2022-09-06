import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './Pages/Home';
import Practice from './Pages/Practice';


function App() {
  return (
   
<>


<BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/" element={<Practice />} /> */}
        </Routes>
        {/* <LastMainSlider/> */}
        {/* <Footer /> */}
      </BrowserRouter>
      


</>

  );
}

export default App;
