import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import BackgroundMusic from './components/BackgroundMusic';

import StoryPage from './pages/StoryPage';
import ChapterPage from './pages/ChapterPage';
import LoginPage from './pages/LoginPage';
import TransitMethodGame from './pages/MiniGames/TransitMethodGame';
import DescriptionPage from './pages/DescriptionPage';

function App() {

  return (
    <>
      <Router>
        <BackgroundMusic />
        
        <Routes>
          <Route 
            path='/' 
            element={
              <LoginPage />
            }
          />
          <Route 
            path='/history' 
            element={<StoryPage/>}
          />
          <Route 
            path='/chapter' 
            element={
              <ChapterPage/>
            }
          />
          <Route 
            path='/prologue' 
            element={
              <DescriptionPage />
            }
          />
          <Route 
            path='/minigame' 
            element={
              <TransitMethodGame />
            }
          />
        </Routes>
      </Router>
    </>
  )
}

export default App
