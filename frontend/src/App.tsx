import { useState, useEffect } from 'react'

function App() {
  const [message, setMessage] = useState("")

  useEffect(() => {
    fetch("/api/hello/")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage("Failed to connect to backend"))
  }, [])

  return (
    <div style={{ fontFamily: "sans-serif", padding: "2rem" }}>
      <h1>{message || "Loading..."}</h1>
    </div>
  )
}

export default App
