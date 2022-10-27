
function App() {
  let list = [
    'bonieky',
    'ricardo',
    'stella',
    'fabio'
  ]

  return (
    <>
      <h2>Lista de Presença</h2>
      <ul>
        {list.map((item, index) => (
          //Warning: Each child in a list should have a unique "key" prop.
          <li key={index}>{item.toUpperCase()}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
