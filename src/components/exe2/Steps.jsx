import { useState } from "react"
import styles from "./Steps.module.css"

const CloseSteps = ({ handleCloseSteps }) => {
  const [status, setStatus] = useState(true)

  const handleStatus = () => {
    setStatus(!status)
    handleCloseSteps()
  }
  return (
    <div className={styles.containerClose}>
      <button className={styles.close} onClick={handleStatus}>
        {status ? "Fechar" : "Abrir"}
      </button>
    </div>
  )
}

const NumbersSteps = ({ steps, currentStep }) => {
  return (
    <>
      {steps.map(({ id }, index) => (
        <div key={id} className={currentStep === index ? styles.active : ""}>
          {index + 1}
        </div>
      ))}
    </>
  )
}
const steps = [
  {
    id: crypto.randomUUID(),
    description: "Entender o problema do cliente",
  },
  {
    id: crypto.randomUUID(),
    description: "Desenvolver a solução do problema",
  },
  {
    id: crypto.randomUUID(),
    description:
      "Repetir até o cliente ficar feliz e encher seu 🍑 de dinheiro",
  },
]
const Steps = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [displayStep, setDisplayStep] = useState(true)

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }
  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }
  const handleCloseSteps = () => {
    setDisplayStep(!displayStep)
  }

  return (
    <div>
      <CloseSteps handleCloseSteps={handleCloseSteps} />
      <div className={displayStep ? styles.steps : styles.stepsHidden}>
        <div className={styles.numbers}>
          <NumbersSteps steps={steps} currentStep={currentStep} />
        </div>
        <p className={styles.message}>{steps[currentStep].description}</p>
        <div className={styles.buttons}>
          <button onClick={handlePrev}>
            <span>Anterior</span>
          </button>
          <button onClick={handleNext}>
            <span>Proximo</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Steps
