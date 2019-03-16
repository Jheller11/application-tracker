import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import InterviewButton from '../components/InterviewButton'

describe('InterviewButton', () => {
  const props = { handleClick: jest.fn(), id: 1 }
  it('renders the InterviewButton', () => {
    const { queryByText } = render(<InterviewButton />)
    const text = queryByText('Interview?')
    expect(text.innerHTML).toBe('Interview?')
  })
  it('accepts props', () => {
    const { container } = render(<InterviewButton {...props} />)
    const button = container.querySelectorAll('button')
    expect(button.length).toBe(1)
    expect(button[0].id).toBe(props.id.toString())
  })
  it('fires the click handler function', () => {
    const { container } = render(<InterviewButton {...props} />)
    const button = container.querySelector('button')
    fireEvent.click(button)
    expect(props.handleClick).toHaveBeenCalledTimes(1)
  })
})
