import React from "react";
import { useParams } from "react-router-dom";
export default function ProductDetail() {
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
  const params = useParams();
  const productId = Number(params.productId);
  const product = products.find((product) => product.id === productId);
  if (!product) {
    return <div>Product not found</div>;
  }
  return (
    <div
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
      <div style={{ color: "coral" }}>Product detail with id: {productId}</div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ color: "blue", fontSize: 20 }}>{product.name}</div>
      </div>
      <div style={{ fontWeight: "bold", color: "red" }}>
        {product.price} VND
      </div>
    </div>
  );
}
