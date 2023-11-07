function Header() {
  return (
    <>
      <div className="r c header">
        <h1
          style={{
            marginRight: "20px",
            fontSize: "32px",
            fontWeight: "bold",
            color: "#f2f2f2",
          }}
        >
          TravelGear
        </h1>
        <img src="/vite.svg" alt="logo" height={64} width={64} />
      </div>
    </>
  );
}
export default Header;
