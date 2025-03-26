import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { CategoryItem } from './components/category-item/category-item';
import { NavBar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { SignIn } from './components/sign-in/sign-in';
import { RegisterForm } from './components/register-form/register-form';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<CategoryItem />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/register-form" element={<RegisterForm />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
