import { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Example app</h1>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
    </div>
  )
}

export default App
