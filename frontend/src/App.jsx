import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Front from './Front';
import Codehunt from './Components/EventInfo/Codehunt'
import BidingBiome from './Components/EventInfo/BidingBiome'
import CircuitSafari from './Components/EventInfo/CircuitSafari';
import EcoSymposium from './Components/EventInfo/EcoSymposium';
import Enigma from './Components/EventInfo/Enigma';
import Junglecruise from './Components/EventInfo/Junglecruise';
import MockPd from './Components/EventInfo/MockPd';
import PredatorsBattle from './Components/EventInfo/PredatorsBattle';
import QuestRush from './Components/EventInfo/QuestRush';
import WildVentures from './Components/EventInfo/WildVentures';
const App = () => {
  return (
    <Router>
    
      <Routes>
        <Route path="/" element={<Front />} />
        <Route path="/CodeHunt" element={<Codehunt/>} />
        <Route path="/bidingbiome" element={<BidingBiome/>} />
        <Route path="/CircuitSafari" element={<CircuitSafari />} />
        <Route path="/EcoSymposium" element={<EcoSymposium />} />
        <Route path="/Enigma" element={<Enigma />} />
        <Route path="/Junglecruise" element={<Junglecruise />} />
        <Route path="/MockPd" element={<MockPd />} />
        <Route path="/PredatorsBattle" element={<PredatorsBattle />} />
        <Route path="/QuestRush" element={<QuestRush />} />
        <Route path="/WildVentures" element={<WildVentures />} />
      </Routes>
    </Router>
  );
};

export default App;
