import React from "react";
import { Route, Link } from "react-router-dom";
import ProductDetail from "./ProductDetail";
export default function Home() {
  const products = [
    {
      id: 1,
      image:
        "https://www.pngarts.com/files/5/Plain-Blue-T-Shirt-PNG-Image-Background.png",
      name: "T-Shirt",
      price: 150000,
    },
    {
      id: 2,
      image: "https://www.pngmart.com/files/21/Adidas-Shoes-PNG-Pic.png",
      name: "Shoes",
      price: 200000,
    },
    {
      id: 3,
      image: "https://www.pngall.com/wp-content/uploads/5/Purse.png",
      name: "Handbag",
      price: 300000,
    },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ display: 'flex', width: 100, backgroundColor: 'greenyellow', justifyContent: 'center', alignItems: 'center', margin: 10, borderRadius: 5}}>
        <Link to="/admin" style={{textDecoration: 'none', fontSize: 20, color: 'red'}}>Admin</Link>
      </div>
      {products.map((product) => {
        return (
          <div
            key={product.id}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              border: "1px solid #33CCFF",
              borderRadius: 5,
              width: 200,
              padding: 10,
              margin: 10,
            }}
          >
            <Link to={`/product/${product.id}`}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <img
                  src={product.image}
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                />
              </div>
            </Link>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Link
                to={`/product/${product.id}`}
                style={{ textDecoration: "none" }}
              >
                <div style={{ color: "blue", fontSize: 20, cursor: "pointer" }}>
                  {product.name}
                </div>
              </Link>
              <div style={{ fontWeight: "bold", color: "red" }}>
                {product.price} VND
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
