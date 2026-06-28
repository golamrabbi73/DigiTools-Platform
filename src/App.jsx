import Banner from './components/Banner';
import Navbar from './components/Navbar';
import ProductSection from './components/ProductSection';
import Stats from './components/Stats';
import './index.css'
function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Stats />
      <ProductSection />
    </>
  );
}
export default App;