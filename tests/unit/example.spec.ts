import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Token from '@/views/Token.vue'

describe('Token.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'Token'
    const wrapper = shallowMount(Token, {
      propsData: { msg },
    })
    expect(wrapper.text()).to.include(msg)
  })
})
