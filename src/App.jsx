import { useState } from 'react'

function App () {
  const [display, setDisplay] = useState('0')

  const handleNumber = event => {
    const number = event.target.textContent

    if (display === '0') {
      setDisplay(number)
    } else {
      setDisplay(display + number)
    }
  }

  return (
    <div className='container'>
      <div className='container w-50'>
        <h1 className='text-center mb-5'>Calculator</h1>
        <div id='display' className='display bg-light border p-2 mb-2'>
          {display}
        </div>
        <div className='d-flex flex  align-items-center justify-content-center h-100 border'>
          <div id='numbers' className='d-flex flex-wrap justify-content-center'>
            <button
              id='seven'
              className='btn btn-secondary btn-lg w-25  m-2'
              onClick={handleNumber}
            >
              7
            </button>
            <button id='eight' className='btn btn-secondary btn-lg w-25  m-2' onClick={handleNumber}>
              8
            </button>
            <button id='nine' className='btn btn-secondary btn-lg w-25  m-2' onClick={handleNumber}>
              9
            </button>
            <button id='four' className='btn btn-secondary btn-lg w-25  m-2' onClick={handleNumber}>
              4
            </button>
            <button id='five' className='btn btn-secondary btn-lg w-25  m-2' onClick={handleNumber}>
              5
            </button>
            <button id='six' className='btn btn-secondary btn-lg w-25  m-2' onClick={handleNumber}>
              6
            </button>
            <button id='one' className='btn btn-secondary btn-lg w-25  m-2' onClick={handleNumber}>
              1
            </button>
            <button id='two' className='btn btn-secondary btn-lg w-25  m-2' onClick={handleNumber}>
              2
            </button>
            <button id='three' className='btn btn-secondary btn-lg w-25  m-2' onClick={handleNumber}>
              3
            </button>
            <button id='zero' className='btn btn-secondary btn-lg w-25  m-2' onClick={handleNumber}>
              0
            </button>
            <button id='decimal' className='btn btn-secondary btn-lg w-25  m-2' onClick={handleNumber}>
              .
            </button>
            <button id='equals' className='btn btn-success btn-lg w-25  m-2' onClick={handleNumber}>
              =
            </button>
          </div>
          <div
            id='operators'
            className='w-75  d-flex flex-column align-items-center'
          >
            <button id='clear' className='btn btn-danger btn w-50 m-2'>
              AC
            </button>
            <button id='divide' className='btn btn-primary btn w-50  m-2'>
              /
            </button>
            <button id='multiply' className='btn btn-primary btn w-50  m-2'>
              x
            </button>
            <button id='subtract' className='btn btn-primary btn w-50  m-2'>
              -
            </button>
            <button id='add' className='btn btn-primary btn w-50  m-2'>
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
