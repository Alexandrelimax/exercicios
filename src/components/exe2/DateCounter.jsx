import { useState } from "react"
import styles from "./date-counter.module.css"

const DateCounter = () => {
  const [dateCount, setDateCount] = useState(new Date())
  const [count, setCount] = useState(0)
  const message = formatMessage(count)
  const dateFormat = dateCount.toLocaleDateString("pt-br", {
    dateStyle: "full",
  })

  const handlechangeDate = (setDate) => {
    const newDate = new Date(dateCount)
    newDate.setDate(newDate.getDate() + setDate)
    setDateCount(newDate)
  }

  const handlePlusCount = () => {
    setCount((count) => count + 1)
    handlechangeDate(1)
  }

  const handleMinusCount = () => {
    setCount((count) => count - 1)
    handlechangeDate(-1)
  }

  return (
    <div className={styles.container}>
      <div className={styles.count}>
        <button onClick={handleMinusCount}>-</button>
        <h2>Contador: {count}</h2>
        <button onClick={handlePlusCount}>+</button>
      </div>
      <h2>
        {message} {dateFormat}
      </h2>
    </div>
  )
}

const formatMessage = (count) => {
  console.log(count)
  const isPlural = Math.abs(count) !== 1
  const dayOrDays = isPlural ? "dias" : "dia"

  if (count === 0) {
    return "Hoje é"
  } else if (count >= 1) {
    return `${count} ${dayOrDays} à partir de hoje é`
  } else {
    return `${Math.abs(count)} ${dayOrDays} atras era`
  }
}
export default DateCounter
