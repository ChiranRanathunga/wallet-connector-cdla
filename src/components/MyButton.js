import React from 'react'

const MyButton = () => {
  const sendData = async () => {
    const response = await fetch('http://localhost:8000/api/hello', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: 'hello world' })
    })
    const data = await response.json()
    console.log(data)
  }

  return (
    <button onClick={sendData}>Send Data</button>
  )
}

export default MyButton
