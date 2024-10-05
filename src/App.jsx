import { useState } from 'react'

import ExpenseCard from "./components/ExpenseCard"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ExpenseCard/>      
    </>
  )
}

export default App
