import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DevHomePage } from './pages/DevHomePage';
import { CryptoHomePage } from './pages/CryptoHomePage';
import { ProjectDetails } from './pages/ProjectDetails';
import { Layout } from './components/Layout';
import '../src/assets/App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<DevHomePage />} />
          <Route path="crypto" element={<CryptoHomePage />} />
          <Route path="project/:id" element={<ProjectDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;