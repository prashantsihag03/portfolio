import React from 'react'
import App from './App'
import { render, screen } from '@testing-library/react'

describe('<App />', () => {
  beforeEach(() => {
    // global.IntersectionObserver = (
    //   callback: IntersectionObserverCallback,
    //   options?: IntersectionObserverInit | undefined
    // ): IntersectionObserver => {
    //   return {
    //     disconnect: () => {},
    //     observe: () => {},
    //     root: null,
    //     rootMargin: '',
    //     thresholds: [],
    //     takeRecords: () => {
    //       return []
    //     },
    //     unobserve: () => {},
    //   }
    // }
  })
  it('renders social icons', async () => {
    render(<App />)
    expect(await screen.findByTestId('social-icons')).toBeTruthy()
  })
})
