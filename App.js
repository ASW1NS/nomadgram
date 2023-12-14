
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Sidenav from './Components/Sidenav';
import Users from './Pages/Users';
import Locationtab from './Pages/Locationtab';
import Viewedit from './Pages/Viewedit';

function App() {
  return (
    <div >
   
<BrowserRouter>
<Routes>
  <Route path="/" element={<Users/>}></Route>
  <Route path="/location" element={<Locationtab/>}></Route>
  <Route path="/viewedit" element={<Viewedit/>}></Route>
</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
