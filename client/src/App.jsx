import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import SkillPage from './pages/SkillPage';
import SkillFormPage from './pages/SkillFormPage';
import ProfilePage from './pages/ProfilePage';
import { AuthProvider } from './context/AuthContext';
import { SkillProvider } from './context/SkillsContext';
import HomePage from './pages/HomePage';
import ProtectedRoute from './ProtectedRoute';
import Navbar from './components/Navbar';

function App() {
  return (
    <AuthProvider>
      <SkillProvider>
        <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />

            <Route element={<ProtectedRoute />}>
              <Route path='/skills' element={<SkillPage />} />
              <Route path='/add-skill' element={<SkillFormPage />} />
              <Route path='/skills/:id' element={<SkillFormPage />} />
              <Route path='/profile' element={<ProfilePage />} />
            </Route>

          </Routes>
        </BrowserRouter>
      </SkillProvider>

    </AuthProvider>

  )

};

export default App;