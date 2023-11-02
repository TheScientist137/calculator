import { useState } from 'react'

function App () {
  const [displayValue, setDisplayValue] = useState('0')
  const [prevValue, setPrevValue] = useState('')
  const [operator, setOperator] = useState('')
  const [waitingForOperand, setWaitingForOperand] = useState(false)

  const handleNumberClick = digit => {
    if (waitingForOperand) {
      setDisplayValue(String(digit))
      setWaitingForOperand(false)
    } else {
      setDisplayValue((displayValue === '0' ? '' : displayValue) + digit)
    }
  }

  const handleOperatorClick = nextOperator => {
    if (prevValue && operator && !waitingForOperand) {
      calculate()
    } else {
      setPrevValue(displayValue)
    }
    setWaitingForOperand(true)
    setOperator(nextOperator)
  }

  const handleDecimalClick = () => {
    if (waitingForOperand) {
      setDisplayValue('0.') // Si esperas un operando, establece el valor como '0.'
      setWaitingForOperand(false)
    } else if (!displayValue.includes('.')) {
      setDisplayValue(displayValue + '.') // Agregar el punto solo si no está presente
    }
  }

  const calculate = () => {
    const prev = parseFloat(prevValue)
    const next = parseFloat(displayValue)
    let result = 0

    if (operator === '+') {
      result = prev + next
    } else if (operator === '-') {
      result = prev - next
    } else if (operator === 'x') {
      result = prev * next
    } else if (operator === '/') {
      result = prev / next
    }

    setDisplayValue(result.toString())
    setPrevValue('')
    setOperator('')
    setWaitingForOperand(false)
  }

  const clear = () => {
    setDisplayValue('0')
    setPrevValue('')
    setOperator('')
    setWaitingForOperand(false)
  }

  return (
    <div className='container w-50'>
      <h1 className='text-center mb-5'>Calculator</h1>
      <div id='display' className='display bg-light border p-2 mb-2'>
        {displayValue}
      </div>
      <div className='d-flex flex  align-items-center justify-content-center h-100 border'>
        <div id='numbers' className='d-flex flex-wrap justify-content-center'>
          <button
            id='seven'
            className='btn btn-secondary btn-lg w-25  m-2'
            onClick={() => handleNumberClick(7)}
          >
            7
          </button>
          <button
            id='eight'
            className='btn btn-secondary btn-lg w-25  m-2'
            onClick={() => handleNumberClick(8)}
          >
            8
          </button>
          <button
            id='nine'
            className='btn btn-secondary btn-lg w-25  m-2'
            onClick={() => handleNumberClick(9)}
          >
            9
          </button>
          <button
            id='four'
            className='btn btn-secondary btn-lg w-25  m-2'
            onClick={() => handleNumberClick(4)}
          >
            4
          </button>
          <button
            id='five'
            className='btn btn-secondary btn-lg w-25  m-2'
            onClick={() => handleNumberClick(5)}
          >
            5
          </button>
          <button
            id='six'
            className='btn btn-secondary btn-lg w-25  m-2'
            onClick={() => handleNumberClick(6)}
          >
            6
          </button>
          <button
            id='one'
            className='btn btn-secondary btn-lg w-25  m-2'
            onClick={() => handleNumberClick(1)}
          >
            1
          </button>
          <button
            id='two'
            className='btn btn-secondary btn-lg w-25  m-2'
            onClick={() => handleNumberClick(2)}
          >
            2
          </button>
          <button
            id='three'
            className='btn btn-secondary btn-lg w-25  m-2'
            onClick={() => handleNumberClick(3)}
          >
            3
          </button>
          <button
            id='zero'
            className='btn btn-secondary btn-lg w-25  m-2'
            onClick={() => handleNumberClick(0)}
          >
            0
          </button>
          <button
            id='decimal'
            className='btn btn-secondary btn-lg w-25  m-2'
            onClick={handleDecimalClick}
          >
            .
          </button>
          <button
            id='equals'
            className='btn btn-success btn-lg w-25  m-2'
            onClick={calculate}
          >
            =
          </button>
        </div>
        <div
          id='operators'
          className='w-50  d-flex flex-column align-items-center'
        >
          <button
            id='clear'
            className='btn btn-danger btn w-50  m-2'
            onClick={clear}
          >
            AC
          </button>
          <button
            id='divide'
            className='btn btn-primary btn w-50  m-2'
            onClick={() => handleOperatorClick('/')}
          >
            /
          </button>
          <button
            id='multiply'
            className='btn btn-primary btn w-50  m-2'
            onClick={() => handleOperatorClick('x')}
          >
            x
          </button>
          <button
            id='subtract'
            className='btn btn-primary btn w-50  m-2'
            onClick={() => handleOperatorClick('-')}
          >
            -
          </button>
          <button
            id='add'
            className='btn btn-primary btn w-50  m-2'
            onClick={() => handleOperatorClick('+')}
          >
            +
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
