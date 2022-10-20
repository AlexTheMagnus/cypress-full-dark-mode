import Title from '../../example-app/src/Title'

describe('Component testing example', () => {
  it('mounts', () => {
    cy.mount(<Title />)
  })
})