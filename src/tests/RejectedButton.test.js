import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import RejectedButton from '../components/RejectedButton'

describe('RejectedButton', () => {
  const props = { handleClick: jest.fn(), id: 1 }
  it('renders the RejectedButton', () => {
    const { queryByText } = render(<RejectedButton />)
    const button = queryByText('Rejection?')
    expect(button.innerHTML).toBe('Rejection?')
  })
  it('accepts props', () => {
    const { container } = render(<RejectedButton {...props} />)
    const button = container.querySelectorAll('button')
    expect(button.length).toBe(1)
    expect(button[0].id).toBe(props.id.toString())
  })
  it('fires the click handler function', () => {
    const { container } = render(<RejectedButton {...props} />)
    const button = container.querySelector('button')
    fireEvent.click(button)
    expect(props.handleClick).toHaveBeenCalledTimes(1)
  })
})
