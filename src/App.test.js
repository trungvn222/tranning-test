import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { shallow } from "enzyme";
import EmzymeAdapter from "enzyme-adapter-react-16";
import App from "./App";

Enzyme.configure({
  adapter: new EmzymeAdapter()
});

/**
 * Factory function to create ShallowWrapper for the App component
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @param {object} state - Component state specific to this setup
 * @returns {ShallowWrapper}
 */
// const setup = (props = {}, state = null) => {
//   const wrapper = shallow(<App {...props} />);
//   if (state) {
//     wrapper.setState(state);
//   }
//   return wrapper;
// };

// const findByTestAttr = (wrapper, val) => {
//   return wrapper.find(`[data-test="${val}"]`);
// };

test("renders without errors", () => {
  // const wrapper = setup();
  // const appComponent = findByTestAttr(wrapper, "component-app");
  // expect(appComponent.length).toBe(1);
});

test("renders increment button", () => {
  // const wrapper = setup();
  // const button = findByTestAttr(wrapper, "increment-button");
  // expect(button.length).toBe(1);
});

test("renders counter display", () => {
  // const wrapper = setup();
  // const counterDisplay = findByTestAttr(wrapper, "counter-display");
  // expect(counterDisplay.length).toBe(1);
});

test("counter starts at 0", () => {
  // const wrapper = setup();
  // const initialCpunterState = wrapper.state("counter");
  // expect(initialCpunterState).toBe(0);
});

test("click button increment counter display", () => {
  // const counter = 7;
  // const wrapper = setup(null, { counter: counter });
  // // find button and click
  // const button = findByTestAttr(wrapper, "increment-button");
  // button.simulate("click");
  // wrapper.update();
  // // find display and test value
  // const counterDisplay = findByTestAttr(wrapper, "counter-display");
  // expect(counterDisplay.text()).toContain(counter + 1);
});
