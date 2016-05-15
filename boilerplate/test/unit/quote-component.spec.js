const
  Vue                  = require('vue')
, Quote                = require('../../src/components/Quote.vue')
, QuoteServiceInjector = require('!!vue?inject!../../src/components/Quote.vue')
, QuoteWithMocks       = QuoteServiceInjector({
  '../services/quote' : {
    quote : 'Hello from a mocked service!'
  }
})

describe('Quote.vue', () => {

  it('should have correct message', () => {
    expect(Quote.data().quote).toBe('')
  })

  it('should render correct message', () => {
    const vm = new Vue({
      template   : '<div><test></test></div>'
    , components : {'test' : Quote}
    }).$mount()
    expect(vm.$el.querySelector('h2').textContent).toBe('Random Quote')
  })
})

