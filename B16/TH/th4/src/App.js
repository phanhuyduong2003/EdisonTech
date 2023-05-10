import React, { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "./store/product";

export default function App() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const [product, setProduct] = useState();

  const onChangeInput = (ev) => {
    setProduct((prev) => ({ ...prev, [ev.target.name]: ev.target.value }));
  };

  const onAddProduct = () => {
    setProduct({});
    dispatch(addProduct(product));
  };

  return (
    <div className="container">
      <div>
        <div className="title">Thêm sản phẩm</div>
        <div>Tên</div>
        <input
          className="input"
          value={product?.name || ""}
          name="name"
          onChange={onChangeInput}
        />
        <div>Giá</div>
        <input
          className="input"
          value={product?.price || ""}
          name="price"
          onChange={onChangeInput}
        />
        <div>Màu</div>
        <select
          className="input"
          name="color"
          value={product?.color || ""}
          onChange={onChangeInput}
        >
          <option value="green">Xanh</option>
          <option value="red">Đỏ</option>
          <option value="yellow">Vàng</option>
          <option value="pink">Hồng</option>
        </select>
        <div>Mô tả</div>
        <textarea
          rows="4"
          className="input"
          value={product?.description || ""}
          name="description"
          onChange={onChangeInput}
        />
        <button className="btnSubmit" onClick={onAddProduct}>
          Thêm
        </button>
      </div>

      <div className="product-list">
        <div className="title">List sản phẩm</div>
        {products?.map((e, i) => (
          <div key={i} className="item">
            <div>
              {" "}
              {e?.name} - {e?.price} - {e?.color}
            </div>
            <div>{e?.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
