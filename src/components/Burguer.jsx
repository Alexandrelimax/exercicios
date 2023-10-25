const burgersList = [
  {
    name: "Duo",
    ingredients:
      "Pão selado na manteiga, hambúrguer BOVINO de 160gr, cheddar, cebola caramelizada e molho especial",
    price: 37,
    photoName: "assets/img/burgers/duo.jpg",
    soldOut: false,
  },
  {
    name: "Kids",
    ingredients:
      "Burger de blend de cogumelos e mandioca, abacaxi caramelizado, muçarela, alface, tomate e molho verde",
    price: 29,
    photoName: "assets/img/burgers/kids.jpg",
    soldOut: false,
  },
  {
    name: "Master",
    ingredients:
      "Pão selado na manteiga, hambúrguer BOVINO de 100gr, bacon, cheddar e barbecue",
    price: 51,
    photoName: "assets/img/burgers/master.jpg",
    soldOut: false,
  },
  {
    name: "Monster",
    ingredients:
      "Pão selado na manteiga, 2x hambúrguer BOVINO de 100gr, bacon, cheddar e barbecue",
    price: 47,
    photoName: "assets/img/burgers/monster.jpg",
    soldOut: false,
  },
  {
    name: "Prime",
    ingredients:
      "Pão selado na manteiga, hambúrguer de CARNE DE SOL de 160gr, queijo coalho, bacon, alface, tomate, cebola roxa e melaço de cana",
    price: 43,
    photoName: "assets/img/burgers/prime.jpg",
    soldOut: true,
  },
  {
    name: "Slim",
    ingredients:
      "Pão selado na manteiga, hambúrguer CUPIM de 180gr, 2 fatias de muçarela, alface, tomate, picles de cebola roxa e molho especial de alho",
    price: 27,
    photoName: "assets/img/burgers/slim.jpg",
    soldOut: false,
  },
]

const burgers = burgersList.map((burger) => ({
  ...burger,
  id: crypto.randomUUID(),
}))
const Burguer = ({ name, img, ingredients, price, soldOut }) => {
  return (
    <li className={`burger ${soldOut ? "sold-out" : ""}`}>
      <img src={img} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>R$ {soldOut ? "CABÔ" : price}</span>
      </div>
    </li>
  )
}

export const Menu = () => {
  return (
    <>
      <div className="menu">
        <h2>Cardapio</h2>
        <p>
          Depois de uma semana desafiadora, nada melhor do que saborear um
          burger onde cada mordida é um abraço saboroso, não é mesmo?🍔✨.
        </p>
      </div>
      <ul className="burgers">
        {burgers.length > 0 &&
          burgers.map((burger) => (
            <Burguer
              key={burger.id}
              name={burger.name}
              img={burger.photoName}
              ingredients={burger.ingredients}
              price={burger.price}
              soldOut={burger.soldOut}
            />
          ))}
      </ul>
    </>
  )
}
