import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const products = [
    { id: 1, nazwa: 'Notes', cena: 12.5 },
    { id: 2, nazwa: 'Długopis', cena: 3.2 },
    { id: 3, nazwa: 'Plecak', cena: 89.0 },
    { id: 4, nazwa: 'Kalkulator', cena: 45.9 },
    { id: 5, nazwa: 'Zakreślacz', cena: 4.75 },
  ];

  const [cartItems, UstawProdukty] = useState([]);

  const ObliczaSume = (items) =>
    items.reduce((total, item) => total + item.cena * item.ilosc, 0);

  const ZawartoscKosza = (items) => {
    console.log(
      `Koszyk: ${items.length} pozycji; suma: ${ObliczaSume(items).toFixed(2)}`
    );
  };
const DodajdoKoszyka = (product) => {
    const isInCart = cartItems.some((item) => item.id === product.id);

    const updatedCart = isInCart
      ? cartItems.map((item) =>
          item.id === product.id ? { ...item, ilosc: item.ilosc + 1 } : item
        )
      : [
          ...cartItems,
          { id: product.id, nazwa: product.nazwa, cena: product.cena, ilosc: 1 },
        ];

    UstawProdukty(updatedCart);
    ZawartoscKosza(updatedCart);
  };

  const UsunZKoszyka = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);

    UstawProdukty(updatedCart);
    ZawartoscKosza(updatedCart);
  };

  return (
    <div className="container">
      <h2>Sklepik szkolny</h2>

      <ul className="list-group">
        {products.map((product) => (
          <li
            key={product.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span>
              {product.nazwa} – {product.cena.toFixed(2)} zł
            </span>
            <button
              className="btn btn-sm btn-primary"
              onClick={() => DodajdoKoszyka(product)}
            >
              Do koszyka
            </button>
          </li>
        ))}
      </ul>

      <h3>Koszyk ({cartItems.length} pozycji)</h3>

      {cartItems.length === 0 ? (
        <div className="alert alert-info">Koszyk jest pusty</div>
      ) : (
        <>
          <table className="table table">
            <thead>
              <tr>
                <th>Produkt</th>
                <th>Ilość</th>
                <th>Cena</th>
                <th>Suma</th>
                <th>Akcja</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.nazwa}</td>
                  <td>{item.ilosc}</td>
                  <td>{item.cena.toFixed(2)} zł</td>
                  <td>{(item.cena * item.ilosc).toFixed(2)} zł</td>
                  <td>
                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => UsunZKoszyka(item.id)}
                    >
                      Usuń
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="fw-bold">Suma: {ObliczaSume(cartItems).toFixed(2)} zł</p>
        </>
      )}
    </div>
  );
  
}

export default App
