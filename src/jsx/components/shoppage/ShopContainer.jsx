import React from "react";

export default function ShopContainer({ children }) {
  return (
    <div className="shop">
      <div className="shop__container">{children}</div>
    </div>
  );
}
