import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Dashboard3 from './Components/Dashboard/testdashboard';
import HomePage from './Components/HomePage/HomePage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/dashboard" element={<Dashboard />} exact />
          <Route path="/testdashboard" element={<testdashboard />} exact />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
