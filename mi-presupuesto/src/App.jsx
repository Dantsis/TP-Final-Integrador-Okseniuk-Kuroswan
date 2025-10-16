import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Home from './pages/Home';
import New from './pages/New';
import Edit from './pages/Edit';
import Summary from './pages/Summary';
import Settings from './pages/Settings';

export default function App() {
  return (
    <>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nuevo" element={<New />} />
        <Route path="/editar/:id" element={<Edit />} />
        <Route path="/resumen" element={<Summary />} />
        <Route path="/ajustes" element={<Settings />} />
      </Routes>
    </>
  );
}

