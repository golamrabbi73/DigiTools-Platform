import { ToastContainer } from 'react-toastify';
import Banner from './components/Banner';
import MainSection from './components/MainSection';
import Navbar from './components/Navbar';
import Stats from './components/Stats';
import useCart from './hooks/useCart';
import './index.css'
import Steps from './components/Steps';
function App() {
  const {cart, handleAddToCart, handleRemove, handleCheckout} = useCart();

  return (
    <>
      <ToastContainer position='top-right' autoClose={2000} />
      <Navbar cartCount={cart.length} />
      <Banner />
      <Stats />
      <MainSection
        cart={cart}
        onAddToCart={handleAddToCart}
        onRemove={handleRemove}
        onCheckout={handleCheckout}
      />
      <Steps />
    </>
  );
}
export default App;