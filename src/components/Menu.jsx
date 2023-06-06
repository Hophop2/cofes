import React, { useState } from 'react';
import '../styles/menuStyle.css';
import AnimatedDiv from '../AnimatedDiv';
import AnimatedList from '../animations/BlurAnimation';
import { motion, useAnimation, useInView } from 'framer-motion';
import four from '../img/four.jpg'
const tabelaProduktow = [
  {
    kategoria: 'Coffe',
    produkty: [
      { produkt: 'Espresso', cena: 2.50 },
      { produkt: 'Latte', cena: 3.00 },
      { produkt: 'Cappuccino', cena: 2.75 },
      { produkt: 'Mocha', cena: 3.50 },
      { produkt: 'Americano', cena: 2.25 },
      { produkt: 'Frappe', cena: 3.75 }
    ]
  },
  {
    kategoria: 'Cake',
    produkty: [
      { produkt: 'Sernik', cena: 4.50 },
      { produkt: 'Brownie', cena: 3.25 },
      { produkt: 'Tiramisu', cena: 4.00 },
      { produkt: 'Makowiec', cena: 3.75 },
      { produkt: 'Ciasto marchewkowe', cena: 3.50 },
      { produkt: 'Ciastko czekoladowe', cena: 1.75 }
    ]
  },
  {
    kategoria: 'Alcohol',
    produkty: [
      { produkt: 'Piwo', cena: 5.00 },
      { produkt: 'Wino', cena: 7.50 },
      { produkt: 'Whisky', cena: 10.00 },
      { produkt: 'Rum', cena: 6.50 },
      { produkt: 'Tequila', cena: 8.25 },
      { produkt: 'Wódka', cena: 5.75 }
    ]
  }
];

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleWyborKategorii = (event) => {
    setSelectedCategory(event.target.value);
  };

  const wybraneProdukty = tabelaProduktow.find((item) => item.kategoria === selectedCategory);

  return (
    <>
    <div className="menu-container" id="menu">
      <div className="choose">
      <AnimatedDiv>
        <h2 className="ours">Ours Menu</h2>
        </AnimatedDiv>
        <select value={selectedCategory} onChange={handleWyborKategorii}>
          { selectedCategory === '' ? <option value="">Wybierz kategorię</option> : null}
          <option value="Coffe">Coffe's</option>
          <option value="Alcohol">Alcohol</option>
          <option value="Cake">Cake's</option>
        </select>
      </div>

      {selectedCategory ? (
        <div className="lista">
          <motion.h3
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div>{selectedCategory}</div>
          </motion.h3>
          <div className="spanbox">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
             
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Price
            </motion.span>
          </div>
          <ul className="products">
            {wybraneProdukty.produkty.map((produkt) => (
              <AnimatedDiv key={produkt.produkt}>
                <li className="li-prod">
                  <div className='white'>{produkt.produkt}</div>
                  <motion.div
                    className="cena"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {produkt.cena} e
                  </motion.div>
                </li>
              </AnimatedDiv>
            ))}
          </ul>
        </div>
      ) : (
        
      
        <img src={four} alt='four' className='four'/>
        
      )}
    </div>
  </>
);
};

export default Menu;