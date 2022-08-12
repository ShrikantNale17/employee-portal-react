import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ListOfEmployees from './components/ListOfEmployees';
import AddEmployee from './components/AddEmployee';
import UpdateEmployee from './components/UpdateEmployee';
import NotFound from './components/NotFound';
import { Box, Paper } from '@mui/material';

function App() {
  return (
    // <div className="App">
    <Box component={Paper} p={5} color='ThreeDShadow' bgcolor={'aliceblue'} minHeight={'100%'}>
      <BrowserRouter>
        <Routes>
          <Route path='/employee-portal-react' element={<Navigate to={'/employee-portal-react/employees'} />}></Route>
          <Route path='/employee-portal-react/employees' element={<ListOfEmployees />}></Route>
          <Route path='/employee-portal-react/employees/add' element={<AddEmployee />}></Route>
          <Route path='/employee-portal-react/employees/update/:id' element={<UpdateEmployee />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </Box>
    // </div>
  );
}

export default App;
