import "./App.css";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Calendar from "./pages/Calendar/Calendar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter data-testid="test">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/calendar" element={<Calendar />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
