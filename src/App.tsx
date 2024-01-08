import Home from '@components/Home'
import { RecoilRoot } from 'recoil'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <RecoilRoot>
      <Router>
        <Routes>
          <Route path={'/'} element={<Home />} />
        </Routes>
      </Router>
    </RecoilRoot>
  )
}

export default App
