import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import OfferButton from '../components/OfferButton'

describe('OfferButton', () => {
  const props = { handleClick: jest.fn(), id: 1 }
  it('renders the OfferButton', () => {
    const { queryByText } = render(<OfferButton />)
    const button = queryByText('Offer?')
    expect(button.innerHTML).toBe('Offer?')
  })
  it('accepts props', () => {
    const { container } = render(<OfferButton {...props} />)
    const button = container.querySelectorAll('button')
    expect(button.length).toBe(1)
    expect(button[0].id).toBe(props.id.toString())
  })
  it('fires the click handler function', () => {
    const { container } = render(<OfferButton {...props} />)
    const button = container.querySelector('button')
    fireEvent.click(button)
    expect(props.handleClick).toHaveBeenCalledTimes(1)
  })
})
