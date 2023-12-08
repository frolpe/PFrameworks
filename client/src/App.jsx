import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegisterPage from './pages/SignIn/RegisterPage';
import LoginPage from './pages/Login/LoginPage';
import ProfilePage from './pages/ProfilePage';
import { AuthProvider } from './context/AuthContext';
import SkillPage from './pages/SkillPage';
import SkillFormPage from './pages/SkillFormPage';
import { SkillProvider } from './context/SkillsContext';
import ProjectPage from './pages/ProjectPage';
import ProjectFormPage from './pages/ProjectFormPage';
import { ProjectProvider } from './context/ProjectsContext';
import ExpPage from './pages/ExpPage';
import ExpFormPage from './pages/ExpFormPage';
import { ExpProvider } from './context/ExpContext';
import StudyPage from './pages/StudyPage';
import StudyFormPage from './pages/StudyFormPage';
import { StudyProvider } from './context/StudyContext';
import HomePage from './pages/HomePage';
import ProtectedRoute from './ProtectedRoute';
import Navbar from './components/Navbar';

function App() {
  return (
    <AuthProvider>
      <SkillProvider>
        <ProjectProvider>
          <ExpProvider>
            <StudyProvider>
              <BrowserRouter>
                <Navbar />
                <Routes>
                  <Route path='/' element={<HomePage />} />
                  <Route path='/login' element={<LoginPage />} />
                  <Route path='/register' element={<RegisterPage />} />

                  <Route element={<ProtectedRoute />}>
                    <Route path='/skills' element={<SkillPage />} />
                    <Route path='/add-skill' element={<SkillFormPage />} />
                    <Route path='/skills/:id' element={<SkillFormPage />} />
                    <Route path='/profile' element={<ProfilePage />} />

                    <Route path='/projects' element={<ProjectPage />} />
                    <Route path='/add-project' element={<ProjectFormPage />} />
                    <Route path='/projects/:id' element={<ProjectFormPage />} />

                    <Route path='/exps' element={<ExpPage />} />
                    <Route path='/add-exp' element={<ExpFormPage />} />
                    <Route path='/exps/:id' element={<ExpFormPage />} />

                    <Route path='/studies' element={<StudyPage />} />
                    <Route path='/add-study' element={<StudyFormPage />} />
                    <Route path='/studies/:id' element={<StudyFormPage />} />
                  </Route>
                </Routes>
              </BrowserRouter>
            </StudyProvider>
          </ExpProvider>
        </ProjectProvider>
      </SkillProvider>

    </AuthProvider>

  )

};

export default App;