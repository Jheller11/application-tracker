import React from 'react'

const Index = props => {
  return (
    <ul>
      {props.items.map((item, i) => (
        <li key={i}>
          {item.title}: {item.company}
        </li>
      ))}
    </ul>
  )
}

export default Index
