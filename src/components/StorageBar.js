import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'

const StorageBar = props => {
  let size = (props.size / 5) * 100
  return (
    <ProgressBar
      now={size}
      label={`Using ${props.size < 0.01 ? '< 0.01' : props.size} of 5 MB`}
    />
  )
}

export default StorageBar
