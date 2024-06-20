import React from "react";
import "./Products.css";
import Product from "./Product";
const Products = () => {
  return (
    <>
      <div className="products_row">
        <Product 
          id="1"
          title=' seagate Portable 2TB External Hard Drive Portable HDD USB 3.0 for PC,
          Mac, Playstation, & Xbox - 11-Year Rescue Service{" "}'
          image="https://m.media-amazon.com/images/I/81NLgh-2QfL.__AC_SY300_SX300_QL70_FMwebp_.jpg"
          rating={4}
          price={59.99}
        />
        <Product
          id="1234567"
          title="Razor Cynosa Gaming Keyboard: Individuall Backlit 
        RGB Keys = Spill-Resistant Design - Programmable Macro 
        Functionality - Quiet & Cushioned "
          image="https://m.media-amazon.com/images/I/61tp4UGTG1L._AC_SY355_.jpg"
          rating={4}
          price={39.99}
        />
      </div>
      <div className="products_row">
        <Product
          id="1234567"
          title="Logitech G PRO X 60 Lightspeed Wireless 
          Gaming Keyboard, Ultra Compact TKL 60% Mechanical Keyboard for Windows PC"
          image="https://m.media-amazon.com/images/I/61JmLKdTK1L._AC_SY355_.jpg"
          rating={3}
          price={78.99}
        />
        <Product
          id="1234567"
          title="Lenovo Legion M600s RGB Wireless Gaming Mouse – 19,000 DPI, 6 Programmable Buttons, 70 Hours Battery Life, (Iron Grey) "
          image="https://m.media-amazon.com/images/I/41xl924UHIL._AC_SY355_.jpg"
          rating={4}
          price={45.99}
        />
        <Product
          id="1234567"
          title="Razor Cynosa Gaming Keyboard: Individuall Backlit 
        RGB Keys = Spill-Resistant Design - Programmable Macro 
        Functionality - Quiet & Cushioned "
          image="https://www.google.com/url?sa=i&url=https%3A%2F%2Frebelgaming.co.za%2Fproduct%2Frazer-cynosa-v2-chroma-rgb-membrane-gaming-keyboard%2F&psig=AOvVaw3zQr6nLxXRSvKJ0JHG2bbq&ust=1718205516977000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNizib_s04YDFQAAAAAdAAAAABAE"
          rating={5}
          price={60.99}
        />
      </div>
      <div className="products_row">
        <Product
          id="1234567"
          title="Lenovo Legion Gaming Laptop Bag, Double-Layered Protection, Dedicated Storage Pockets "
          image="https://m.media-amazon.com/images/I/61WUSNkZQpL._AC_SY395_.jpg"
          rating={5}
          price={85.99}
        />
      </div>
    </>
  );
};

export default Products;
