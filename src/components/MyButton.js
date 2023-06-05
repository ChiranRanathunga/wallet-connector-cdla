import React from 'react'

const MyButton = () => {
  const sendData = async () => {
    const response = await fetch('http://localhost:8000/api/hello', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: '1' })
    })
    if (response.ok) {
      // Notify the user that the data has been sent successfully
      alert('Data received successfully. You can now close the window.')
      // Close the window
      window.close()
    } else {
      // Handle error
      alert('Error sending data.')
    }
  }

  return (
    <button onClick={sendData}>Validate</button>
  )
}

export default MyButton