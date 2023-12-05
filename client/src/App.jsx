import {BrowserRouter, Routes, Route} from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';

function App() {
  return(
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<h1>Home Page</h1>} />
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/register' element={<RegisterPage/>} />
          <Route path='/skills' element={<h1>Skills Page</h1>} />
          <Route path='/add-skill' element={<h1>New Skill</h1>} />
          <Route path='/skills/:id' element={<h1>Update Task</h1>} />
          <Route path='/profile' element={<h1>Profile</h1>} />
      </Routes>
    </BrowserRouter>
  )
  
};

export default App;