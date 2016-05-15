const
  Vue   = require('vue')
, About = require('../../src/components/About.vue')

describe('About.vue', () => {
  it('should render correct message', () => {
    const vm = new Vue({
      template   : '<div><test></test></div>'
    , components : {'test': About}
    }).$mount()
    expect(vm.$el.querySelector('h2').textContent).toBe('About Us')
  })
})

