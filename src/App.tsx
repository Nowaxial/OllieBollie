import { Route, Routes } from 'react-router-dom';

import Layout from './components/Layout';
import AboutPage from './pages/AboutPage';
import AfterPage from './pages/AfterPage';
import CommunicationPage from './pages/CommunicationPage';
import HomePage from './pages/HomePage';
import ParentingPage from './pages/ParentingPage';
import SleepPage from './pages/SleepPage';

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/after" Component={AfterPage} />
          <Route path="/about" Component={AboutPage} />
          <Route path="/sleep" Component={SleepPage} />
          <Route path="/communication" Component={CommunicationPage} />
          <Route path="/parenting" Component={ParentingPage} />
        </Routes>
      </Layout>
    </div>
  );
}
export default App;
