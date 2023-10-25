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

export const FlashCards = () => {
  const handleClick = (id) => console.log(id)

  return (
    <ul className="flashcards">
      {cardsInfo.length > 0 &&
        cardsInfo.map(({ id, question }) => (
          <li key={id} className="card" onClick={() => handleClick(id)}>
            {question}
          </li>
        ))}
    </ul>
  )
}
