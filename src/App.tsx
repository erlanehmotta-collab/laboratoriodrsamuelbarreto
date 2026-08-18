import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StoreProvider } from './store/StoreContext';
import { Vitrine } from './pages/Vitrine';
import { Admin } from './pages/Admin';

export const App: React.FC = () => {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Vitrine />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </StoreProvider>
  );
};

export default App;
