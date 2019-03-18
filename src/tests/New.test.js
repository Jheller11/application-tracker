import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import New from '../views/New'

describe('New', () => {
  const props = {
    addItem: jest.fn(),
    history: []
  }
  const newItem = {
    title: 'Test',
    url: 'www.google.com',
    company: 'Google',
    notes: 'Test Notes'
  }
  it('accepts inputs to create a new item', () => {
    const { container, getByLabelText } = render(<New {...props} />)
    const titleNode = getByLabelText('Title:')
    const urlNode = getByLabelText('URL:')
    const companyNode = getByLabelText('Company:')
    const notesNode = getByLabelText('Notes:')
    const button = container.querySelector('button')

    fireEvent.change(titleNode, {
      target: { value: newItem.title }
    })
    fireEvent.change(urlNode, {
      target: { value: newItem.url }
    })
    fireEvent.change(companyNode, {
      target: { value: newItem.company }
    })
    fireEvent.change(notesNode, {
      target: { value: newItem.notes }
    })

    fireEvent.click(button)

    expect(props.addItem).toHaveBeenCalledTimes(1)
    expect(props.addItem).toHaveBeenCalledWith(newItem)
  })
})
