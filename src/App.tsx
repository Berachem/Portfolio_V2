import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DevHomePage } from './pages/DevHomePage';
import { CryptoHomePage } from './pages/CryptoHomePage';
import { ProjectDetails } from './pages/ProjectDetails';
import { Layout } from './components/Layout';
import '../src/assets/App.css';
import InternationalChoiceHelper from './pages/InternationalChoiceHelper';
import 'leaflet/dist/leaflet.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<DevHomePage />} />
          <Route path="international" element={<InternationalChoiceHelper />} />
          <Route path="crypto" element={<CryptoHomePage />} />
          <Route path="project/:id" element={<ProjectDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;