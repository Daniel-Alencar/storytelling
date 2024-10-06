import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import BackgroundMusic from './components/BackgroundMusic';

import StoryPage from './pages/StoryPage';
import ChapterPage from './pages/ChapterPage';

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
              <ChapterPage name={"Chapter 1: Begin"}/>
            }
          />
        </Routes>
      </Router>
    </>
  )
}

export default App
