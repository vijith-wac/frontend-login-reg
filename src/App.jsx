import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Register from './pages/register';
import Profile from './pages/Profile';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './components/Home';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/profile" element={<Profile />} /> */}

         <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
