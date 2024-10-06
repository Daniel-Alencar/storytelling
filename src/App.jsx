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
          <Route path='/' element={<StoryPage/>}/>
          <Route 
            path='/chapter' 
            element={
              <ChapterPage/>
            }
          />
          <Route 
            path='/history' 
            element={
              <DescriptionPage text={"O  ano é 2147. A Terra está passando por tempos difíceis. Os recursos naturais estão quase esgotados, e a humanidade precisa encontrar uma nova casa para sobreviver."}/>
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
