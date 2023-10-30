import { useState } from "react"
import styles from "./flashcards.module.css"
const cardsInfo = [
  {
    id: 7336,
    question: "Do quê aplicações React são feitas?",
    answer: "Componentes",
  },
  {
    id: 8832,
    question: "Qual é o nome da sintaxe usada para descrever UI no React?",
    answer: "JSX",
  },
  {
    id: 3457,
    question: "Em qual linguagem o React é baseado?",
    answer: "JavaScript",
  },
  {
    id: 9103,
    question: "Qual método usar para renderizar uma lista no React?",
    answer: "map",
  },
  {
    id: 1297,
    question: "Qual empresa criou o React?",
    answer: "Meta",
  },
  {
    id: 2002,
    question: "Como passar informações para um componente React?",
    answer: "Através de props",
  },
]

const Card = ({ card, isVisible, onShowAnswer }) => {
  return (
    <div
      className={isVisible ? styles.cardAnswer : styles.card}
      onClick={onShowAnswer}
    >
      <p>{isVisible ? card.answer : card.question}</p>
    </div>
  )
}

const FlashCards = () => {
  const [isVisibleCard, setisVisibleCard] = useState(null)

  const handleAnswer = (id) => {
    if (isVisibleCard === id) {
      setisVisibleCard(null)
    } else {
      setisVisibleCard(id)
    }
  }

  return (
    <div className={styles.flashcards}>
      {cardsInfo.map((card) => (
        <Card
          key={card.id}
          card={card}
          isVisible={card.id === isVisibleCard}
          onShowAnswer={() => handleAnswer(card.id)}
        />
      ))}
    </div>
  )
}

export default FlashCards
