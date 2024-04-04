import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/homeComponent/Home';
import Sort from './components/sortComponent/Sort';
import Pathfinder from './components/pathfinderComponent/Pathfinder';
import Queen from './components/queenComponent/Queen';
import ConvexHull from './components/convexHullComponent/ConvexHull';
import BinarySearch from './components/binarySearchComponent/BinarySearch';
import Seive from './components/primeComponent/Seive';
import Puzzle from './components/15puzzleComponent/Puzzle';



function App() {

  return (
    <BrowserRouter >
      <Routes>
        {/* <Route path='/' element={<Navbar />} /> */}
        <Route index element={<Home />} />
        <Route path='/sort' element={<Sort />} />
        <Route path='/pathfinder' element={<Pathfinder />} />
        <Route path='/nqueen' element={<Queen />} />
        <Route path='/convexhull' element={<ConvexHull />} />
        <Route path='/binarysearch' element={<BinarySearch />} />
        <Route path='/prime' element={<Seive />} />
        <Route path='/15puzzle' element={<Puzzle />} />




      </Routes>
    </BrowserRouter>
  )
}

export default App
