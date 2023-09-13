export default function CartContainer({ children }) {
  return (
    <>
      <div className="cart">
        <div className="cart__container">{children}</div>
      </div>
    </>
  );
}
