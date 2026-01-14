import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MainPage from './components/MainPage';
import CompanyMessage from './components/CompanyMessage';
import './css/MainPage.css';
import CompanyHistory from './components/CompanyHistory';
import PatentsCertifications from './components/PatentsCertifications';
import RequestForm from './components/RequestForm';
import RaD from './components/RaD';
import NewsList from './components/NewsList';
import AddNews from './components/AddNews';
import NewsView from './components/NewsView';
import EmSbr from './components/technology/F1/EmSbr';
import EmMbr from './components/technology/F1/EmMbr';
import EmNprs from './components/technology/F1/EmNprs';
import EmPwt from './components/technology/F1/EmPwt';
import BioFilter from './components/technology/F2/BioFilter';
import MultyScrubber from './components/technology/F2/MultyScrubber';
import Srs from './components/technology/F2/Srs';
import Tos from './components/technology/F2/Tos';
import DrumScreen from './components/technology/F3/DrumScreen';
import UvSystem from './components/technology/F3/UvSystem';
import Electric from './components/technology/F3/Electric';
import Link from './components/technology/F3/Link';
import PostTreat from './components/technology/F3/PostTreat';
import WaterQuality from './components/WaterQuality';
import Atmosphere from './components/Atmosphere';
import Construction from './components/Construction';
import WaterManagement from './components/WaterManagement';
import WaterDesign from './components/WaterDesign';
import WaterConstruction from './components/WaterConstruction';
import AirManagement from './components/AirManagement';
import AirDesign from './components/AirDesign';
import AirConstruction from './components/AirConstruction';
import MechanicalEquipment from './components/MechanicalEquipment';
import WaterSewerage from './components/WaterSewerage';
import NavConstruction from './components/NavConstruction';
import './components/i18n';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/CompanyMessage" element={<CompanyMessage />} />
          <Route path="/CompanyHistory" element={<CompanyHistory />} />
          <Route path="/PatentsCertifications" element={<PatentsCertifications />} />
          <Route path="/RequestForm" element={<RequestForm />} />
          <Route path="/RaD" element={<RaD />} />
          <Route path="/NewsList" element={<NewsList />} />
          <Route path="/AddNews" element={<AddNews />} />
          <Route path="/add-news" element={<AddNews />} />
          <Route path="/uploadImage" element={<uploadImage />} />
          <Route path="/news/:id" element={<NewsView />} />
          <Route path="/technology/F1/EmSbr" element={<EmSbr />} />
          <Route path="/technology/F1/EmMbr" element={<EmMbr />} />
          <Route path="/technology/F1/EmNprs" element={<EmNprs />} />
          <Route path="/technology/F1/EmPwt" element={<EmPwt />} />
          <Route path="/technology/F2/BioFilter" element={<BioFilter />} />
          <Route path="/technology/F2/MultyScrubber" element={<MultyScrubber />} />
          <Route path="/technology/F2/Srs" element={<Srs />} />
          <Route path="/technology/F2/Tos" element={<Tos />} />
          <Route path="/technology/F3/DrumScreen" element={<DrumScreen />} />
          <Route path="/technology/F3/UvSystem" element={<UvSystem />} />
          <Route path="/technology/F3/Electric" element={<Electric />} />
          <Route path="/technology/F3/Link" element={<Link />} />
          <Route path="/technology/F3/PostTreat" element={<PostTreat />} />
          <Route path="/WaterQuality" element={<WaterQuality />} />
          <Route path="/Atmosphere" element={<Atmosphere />} />
          <Route path="/Construction" element={<Construction />} />
          <Route path="/WaterManagement" element={<WaterManagement />} />
          <Route path="/WaterDesign" element={<WaterDesign />} />
          <Route path="/WaterConstruction" element={<WaterConstruction />} />
          <Route path="/AirManagement" element={<AirManagement />} />
          <Route path="/AirDesign" element={<AirDesign />} />
          <Route path="/AirConstruction" element={<AirConstruction />} />
          <Route path="/MechanicalEquipment" element={<MechanicalEquipment />} />
          <Route path="/WaterSewerage" element={<WaterSewerage />} />
          <Route path="/NavConstruction" element={<NavConstruction />} />
          {/* 다른 페이지 라우트를 여기에 추가 */}
        </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

export default App;