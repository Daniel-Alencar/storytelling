import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import BackgroundMusic from './components/BackgroundMusic';

import StoryPage from './pages/StoryPage';

function App() {
  return (
    <>
      <Router>
        <BackgroundMusic />
        
        <Routes>
          <Route path='/' element={<StoryPage/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
