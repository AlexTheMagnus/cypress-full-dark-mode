const { join } = require('path')
const postcss = require('postcss')
const cssVariables = require('postcss-css-variables')

/* global Cypress, cy */
/* eslint-env browser */
const getSourceFolder = () => {
  // if source folder starts with /../...
  // the user package has installed it using relative "file:.." link
  const installedAsFile = Cypress._.startsWith(__dirname, '/..')
  const sourceFolder = installedAsFile
    ? join('node_modules/cypress-full-dark-mode/src')
    : __dirname
  return sourceFolder.replace(/^\//, '')
}

/**
 * Converts CSS variables to plain CSS
 */
const convertCssVariables = mycss =>
  postcss([cssVariables()]).process(mycss).css

const getHead = () => Cypress.$(parent.window.document.head)

const isThemeLoaded = $head => $head.find('#cypress-full-dark-mode').length > 0

const getRootTest = test => {
  return test.parent ? getRootTest(test.parent) : test
}

const hasTestFailed = test => test.state === 'failed'

const hasSuiteFailed = suite => {
  return suite.tests.some(hasTestFailed) || suite.suites.some(hasSuiteFailed)
}

const shouldStubMediaQuery = () => Boolean(Cypress.config('darkMediaQuery'))

/**
 * returns a function that a `before` callback can call to load desired theme
 * @example before(loadTheme())
 */
const loadTheme = () => {
  return () => {
    // do we have style loaded already? if yes, nothing to do
    // const $head = Cypress.$(parent.window.document.head)
    const $head = getHead()
    if (isThemeLoaded($head)) {
      return
    }

    const themeFilename = getSourceFolder()

    cy.readFile(themeFilename, { log: false })
      .then(convertCssVariables)
      .then(css => {
        $head.append(
          `<style type="text/css" id="cypress-full-dark-mode">\n${css}</style>`
        )
      })
  }
}

const stubMediaQuery = () => () => {
  if (!shouldStubMediaQuery()) {
    return
  }

  // if website supports loading dark theme styles via JavaScript
  // then tell it to. Website should ask like this
  // if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  //  load dark css
  // }
  Cypress.on('window:before:load', win => {
    cy.stub(win, 'matchMedia')
      .withArgs('(prefers-color-scheme: dark)')
      .returns({
        matches: true
      })
      .as('dark-media-query')
  })
}

module.exports = {
  getSourceFolder,
  loadTheme,
  stubMediaQuery
}
