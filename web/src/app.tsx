import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CreateRoom } from './pages-create-room';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/room" element={<CreateRoom />} />
      </Routes>
    </BrowserRouter>
  )
};

