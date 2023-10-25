// import { Counter } from "./components/Counter"
// import { Steps } from "./components/Steps"
// import { Faq } from "./components/Faqs"
// import { FlashCards } from "./components/FlashCards"

import { Menu } from "./components/Burguer"

const Header = () => {
  return (
    <header>
      <img className="logo" src="assets/img/logo-burgao-do-ze.jpg" alt="logo" />
    </header>
  )
}

const Footer = () => {
  const date = new Date()
  const openStore = 12
  const closeStore = 22
  const isOpen = date.getHours() >= openStore && date.getHours() < closeStore
  console.log(isOpen)
  return (
    <footer>
      {isOpen ? (
        <OrderMessage closeHour={closeStore} />
      ) : (
        <p>🕛 Vamo abrir amanhã as {openStore}h</p>
      )}
    </footer>
  )
}

const OrderMessage = ({ openStore }) => {
  const handleMessage = () => console.log("Direcionando pedido...")
  return (
    <div className="order">
      <p>
        🕛 Tamo aberto até as {openStore}h. Vem visitar a gente ou faça seu
        pedido online.
      </p>
      <button className="btn" onClick={handleMessage}>
        Fazer pedido
      </button>
    </div>
  )
}

const App = () => {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  )
}

export { App }
