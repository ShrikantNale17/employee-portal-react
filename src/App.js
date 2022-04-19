import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ListOfEmployees from './components/ListOfEmployees';
import AddEmployee from './components/AddEmployee';
import UpdateEmployee from './components/UpdateEmployee';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to={'/employees'} />}></Route>
          <Route path='/employees' element={<ListOfEmployees />}></Route>
          <Route path='/employees/add' element={<AddEmployee />}></Route>
          <Route path='/employees/update/:id' element={<UpdateEmployee />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
