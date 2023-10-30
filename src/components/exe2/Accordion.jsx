import { useState } from "react"
import styles from "./accordion.module.css"
const faqs = [
  {
    id: crypto.randomUUID(),
    title: "Quem é a maior celebridade do mundo dos games no BR?",
    answer: "A apresentadora Ana Maria Braga. Joga 3h pra desocupar a cabeça.",
  },
  {
    id: crypto.randomUUID(),
    title: "Onde fica a europa da américa do sul?",
    answer: "Argentina. BR vive como rei em Buenos Aires.",
  },
  {
    id: crypto.randomUUID(),
    title: "Qual é a grande oportunidade para desenvolvedores BR?",
    answer: "Aproveitar a alta demanda pra ganhar em dólar ou euro.",
  },
]
const Accordion = () => {
  return (
    <div className={styles.accordion}>
      {faqs.map((faq, index) => (
        <Faq key={faq.id} faq={faq} index={index} />
      ))}
    </div>
  )
}

const Faq = ({ faq, index }) => {
  const [isVisible, setIsVisible] = useState(false)

  const handleClick = () => {
    setIsVisible(!isVisible)
  }

  return (
    <div
      className={styles.item}
      onClick={handleClick}
      style={isVisible ? { borderTop: " 6px solid pink" } : {}}
    >
      <p className={styles.number} style={isVisible ? { color: "pink" } : {}}>
        {index}
      </p>
      <h2 className={styles.title} style={isVisible ? { color: "pink" } : {}}>
        {faq.title}
      </h2>
      <p className={styles.icon}>{isVisible ? "-" : "+"}</p>
      <p className={styles.contentbox}>{isVisible && faq.answer}</p>
    </div>
  )
}

export default Accordion
