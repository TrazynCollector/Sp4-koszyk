import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const products = [
    { id: 1, nazwa: 'Notes', cena: 12.5 },
    { id: 2, nazwa: 'Długopis', cena: 3.2 },
    { id: 3, nazwa: 'Plecak', cena: 89.0 },
    { id: 4, nazwa: 'Kalkulator', cena: 45.9 },
    { id: 5, nazwa: 'Zakreślacz', cena: 4.75 },
  ];

  const [cartItems, setCartItems] = useState([]);

  const calculateTotal = (items) =>
    items.reduce((total, item) => total + item.cena * item.ilosc, 0);

  const logCartSummary = (items) => {
    console.log(
      `Koszyk: ${items.length} pozycji; suma: ${calculateTotal(items).toFixed(2)}`
    );
  };

  
}

export default App;