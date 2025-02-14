import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { QuestProvider } from '@questlabs/react-sdk';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import FeedbackButton from './components/FeedbackButton';
import AppHelp from './components/HelpHub';
import questConfig from './config/questConfig';
import './App.css';

function App() {
  return (
    <Router>
      <QuestProvider
        apiKey={questConfig.APIKEY}
        entityId={questConfig.ENTITYID}
        apiType="PRODUCTION"
      >
        <AuthProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Routes>
            </main>
            <FeedbackButton />
            <AppHelp />
            <Footer />
          </div>
        </AuthProvider>
      </QuestProvider>
    </Router>
  );
}

export default App;