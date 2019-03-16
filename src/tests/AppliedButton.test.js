import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import AppliedButton from '../components/AppliedButton'

describe('AppliedButton', () => {
  const props = { handleClick: jest.fn(), id: 1 }
  it('renders the AppliedButton', () => {
    const { queryByText } = render(<AppliedButton />)
    const button = queryByText('Apply?')
    expect(button.innerHTML).toBe('Apply?')
  })
  it('accepts props', () => {
    const { container } = render(<AppliedButton {...props} />)
    const button = container.querySelectorAll('button')
    expect(button.length).toBe(1)
    expect(button[0].id).toBe(props.id.toString())
  })
  it('fires the click handler function', () => {
    const { container } = render(<AppliedButton {...props} />)
    const button = container.querySelector('button')
    fireEvent.click(button)
    expect(props.handleClick).toHaveBeenCalledTimes(1)
  })
})
