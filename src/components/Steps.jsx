const ButtonEvent = ({ containerName, nameClass, handleEvent, buttonText }) => {
  return (
    <div className={containerName}>
      <button onClick={handleEvent} className={nameClass}>
        <span>{buttonText}</span>
      </button>
    </div>
  )
}

export const Steps = () => {
  const values = ["Anterior", "Proximo", "Fechar"]
  const handlePreviousbutton = () => console.log(values[0])
  const handleNextbutton = () => console.log(values[1])
  const handleClosebutton = () => console.log(values[2])

  return (
    <div>
      <ButtonEvent
        containerName="container-close"
        nameClass="close"
        handleEvent={handleClosebutton}
        buttonText="Fechar"
      />
      <div className="steps">
        <div className="numbers">
          <div className="active">1</div>
          <div>2</div>
          <div>3</div>
        </div>
        <div>
          <p className="message">Passo 1: Entender o problema do cliente</p>
        </div>
        <div className="buttons">
          <button onClick={handlePreviousbutton}>
            <span>Anterior</span>
          </button>
          <button onClick={handleNextbutton}>
            <span>Proximo</span>
          </button>
        </div>
        <div className="buttons"></div>
      </div>
    </div>
  )
}
