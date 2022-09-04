import React, { useEffect, useState } from 'react'

export default function Notes() {

  const [notes, setNotes] = useState([])

  useEffect(() => {
    fetch('http://localhost:8000/notes')
    .then(response => response.json())
    .then(response => {
      console.log(response);
      setNotes(response)
    })
  }, [])

  return (
    <div>
      {notes.map((e, i) => (
        <p key={e.id}>{e.name}</p>
      ))}
    </div>
  )
}
