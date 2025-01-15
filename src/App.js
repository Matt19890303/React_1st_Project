import './App.css';
import { CategoryItem } from './components/category-item/category-item';
import { NavBar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';

function App() {
  return (
    <>
      <NavBar />
      <CategoryItem />
      <Footer />
    </>
  );
}

export default App;
