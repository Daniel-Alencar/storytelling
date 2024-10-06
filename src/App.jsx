import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import BackgroundMusic from './components/BackgroundMusic';

import StoryPage from './pages/StoryPage';
import ChapterPage from './pages/ChapterPage';
import LoginPage from './pages/LoginPage';
import TransitMethodGame from './pages/MiniGames/TransitMethodGame';

function App() {

  return (
    <>
      <Router>
        <BackgroundMusic />
        
        <Routes>
          <Route path='/' element={<StoryPage/>}/>
          <Route 
            path='/chapter' 
            element={
              <ChapterPage/>
            }
          />
          <Route 
            path='/login' 
            element={
              <LoginPage />
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
