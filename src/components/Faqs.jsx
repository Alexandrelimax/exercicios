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

export const Faq = () => {
  return (
    <div className="accordion">
      {faqs.map((faq, index) => (
        <div key={faq.id} className="item">
          <p className="number">{index + 1}</p>
          <h2 className="title">{faq.title}</h2>
          <p>-</p>
          <div className="content-box">
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
