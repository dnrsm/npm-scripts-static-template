import Hello from "../../js/components/Hello.vue"
import { mount } from "@vue/test-utils"
import sinon from "sinon"

describe("Click event", () => {
  it('Click on yes button calls our method with argument "yes"', () => {
    const spy = sinon.spy()
    const wrapper = mount(Hello, {
      // propsData: {
      //   callMe: spy
      // }
    })
    wrapper.find("button").trigger("click")

    spy.should.have.been.calledWith("yes")
  })
})
