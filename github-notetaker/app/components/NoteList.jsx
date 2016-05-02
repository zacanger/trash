import React from 'react'

const NoteList = ({notes}) => {
  return (
    <ul>
      {notes.map((note, idx) => {
        <li key={idx}>
          {note.text ? note.text : note}
        </li>
      })}
    </ul>
  )
}

NoteList.propTypes = {
  notes : React.PropTypes.array.isRequired
}

export default NoteList

