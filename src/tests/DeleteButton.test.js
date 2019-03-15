import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import DeleteButton from '../components/DeleteButton'

describe('DeleteButton', () => {
  const props = { handleClick: jest.fn(), id: 1 }
  it('renders the DeleteButton', () => {
    const { queryByText } = render(<DeleteButton />)
    const del = queryByText('Del')
    expect(del.innerHTML).toBe('Del')
  })
  it('accepts props', () => {
    const { container } = render(<DeleteButton {...props} />)
    const button = container.querySelectorAll('button')
    expect(button.length).toBe(1)
    expect(button[0].id).toBe(props.id.toString())
  })
  it('fires the click handler function', () => {
    const { container } = render(<DeleteButton {...props} />)
    const button = container.querySelector('button')
    fireEvent.click(button)
    expect(props.handleClick).toHaveBeenCalledTimes(1)
  })
})
