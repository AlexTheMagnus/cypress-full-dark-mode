import { useState } from 'react'
import Title from './Title'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Title />
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
    </div>
  )
}

export default App
