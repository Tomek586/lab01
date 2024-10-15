import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RootLayout from './layouts/RootLayout'; // Zakładam, że RootLayout jest w components
import Home from './pages/Home'; // Strona główna z profilami osób
import Lab1 from './pages/Lab1'; // Nowa strona Lab1
import Lab2 from './pages/Lab2'; // Nowa strona Lab2
import NotFound from './pages/NotFound'; // Strona błędu 404

// Menu items
const menuItems = [
  { id: 1, label: 'Home', url: '/', urlPattern: '/', element: <Home /> },
  { id: 2, label: 'Laboratorium 1', url: '/lab1', urlPattern: '/lab1/:id', element: <Lab1 /> },
  { id: 3, label: 'Laboratorium 2', url: '/lab2', urlPattern: '/lab2', element: <Lab2 /> },
];

const App = () => {
  return (
    <RootLayout items={menuItems}> {/* RootLayout z nawigacją i stopką */}
      <Routes>
        {menuItems.map(item => (
          <Route path={item.urlPattern} element={item.element} key={item.id} />
        ))}
        <Route path="*" element={<NotFound />} /> {/* Obsługa błędu 404 */}
      </Routes>
    </RootLayout>
  );
};

export default App;
