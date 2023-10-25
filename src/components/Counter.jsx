import "./date-counter.css"

export const Counter = () => {
  const handleIntervalMinus = () => console.log("Clicou no menos do intervalo")
  const handleIntervalPlus = () => console.log("Clicou no mais do intervalo")
  const handleCounterMinus = () => console.log("Clicou no menos do contador")
  const handleCounterPlus = () => console.log("Clicou no mais do contador")
  const date = new Date().toLocaleDateString("pt-br", { dateStyle: "full" })
  return (
    <div className="container">
      <div className="count">
        <button onClick={handleIntervalMinus}>-</button>
        <h2>Intervalo</h2>
        <button onClick={handleIntervalPlus}>+</button>
      </div>
      <div className="count">
        <button onClick={handleCounterMinus}>-</button>
        <h2>Contador</h2>
        <button onClick={handleCounterPlus}>+</button>
      </div>
      <div>
        <h2>{date}</h2>
      </div>
    </div>
  )
}
