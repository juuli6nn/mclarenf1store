import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import './index.css' // Your custom CSS - loads LAST to override Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Bootstrap JS
import App from './App.jsx'
import CartProvider from './content/CartContent.jsx';
import WishlistProvider from './content/WishlistContext.jsx';
import { registerSW } from 'virtual:pwa-register';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <WishlistProvider>
        <App />
      </WishlistProvider>
    </CartProvider>
  </StrictMode>,
)

// Register service worker for PWA
registerSW();
