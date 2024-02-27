
import './App.css';
import HeaderComponent from './component/HeaderComponent';
import FooterComponent from './component/FooterComponent';
import ListEmployeeComponent from './component/ListEmployeeComponent';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import EmployeeComponent from './component/EmployeeComponent';

function App() {
  return (
    <div>
      <BrowserRouter>
      <HeaderComponent/>
      <div className=''>
        <Routes>
        <Route path='/' element={<ListEmployeeComponent/>}/>
        <Route path='/employees' element={<ListEmployeeComponent/>}/>
        <Route path='/add-employee' element={<EmployeeComponent/>}/>
        <Route path='/edit-employee/:id' element={<EmployeeComponent/>}/>
        </Routes>
      </div>
      <FooterComponent/>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
