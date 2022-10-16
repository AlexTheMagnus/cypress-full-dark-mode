import App from '../../example-app/src/App'

describe('Component testing example', () => {
  it('mounts', () => {
    cy.mount(<App />)
  })
})