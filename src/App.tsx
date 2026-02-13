import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DataProvider } from './context/DataContext';
import { ModalProvider } from './context/ModalContext';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import SubmitPage from './pages/SubmitPage';
import AdminPage from './pages/AdminPage';
import SearchPage from './pages/SearchPage';
import AuthModal from './components/AuthModal';

export function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <ModalProvider>
          <AuthModal />
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="category/:id" element={<CategoryPage />} />
              <Route path="submit" element={<SubmitPage />} />
              <Route path="admin" element={<AdminPage />} />
              <Route path="search" element={<SearchPage />} />
              {/* Fallback routes could go here */}
            </Route>
          </Routes>
        </ModalProvider>
      </BrowserRouter>
    </DataProvider>
  );
}
