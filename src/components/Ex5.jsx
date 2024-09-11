function Ex5() {
  function sum(a, b) {
    return a + b;
  }

  return (
    <div style={{ border: '1px dotted #000', padding: '10px' }}>
      Tổng của 3 và 4 là {sum(3, 4)}
      {new Date().toLocaleTimeString()}
    </div>
  );
}

export default Ex5;
