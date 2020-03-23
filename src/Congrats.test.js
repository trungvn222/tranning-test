import React from "react";
import { shallow } from "enzyme";
import checkPropTypes from "check-prop-types";

import { findByTestAttr, checkProps } from "./test/testUtils";
import Congrats from "./Congrats";

const setup = (props = {}) => {
	return shallow(<Congrats {...props}></Congrats>);
};

test("renders without error", () => {
	const wrapper = setup({ success: false });
	const component = findByTestAttr(wrapper, "component-congrats");
	expect(component.length).toBe(1);
});

test("renders no text when `success` prop is false", () => {
	const wrapper = setup({ success: false });
	const component = findByTestAttr(wrapper, "component-congrats");
	expect(component.text()).toBe("");
});

test("render non-empty congrats message when success prop is true", () => {
	const wrapper = setup({ success: true });
	const message = findByTestAttr(wrapper, "congrats-message");
	expect(message.text().length).not.toBe(0);
});
// test props
// step 1 : npm install --save check-prop-types
// step 2 : import
// step 3 : defint prop need test EX : const expectedProps = { success: false };
test("does not throw warning with expected props", () => {
	const expectedProps = { success: false };

	//  const propError = checkProps(Congrats, expectedProps);
	const propError = checkPropTypes(
		Congrats.propTypes,
		expectedProps,
		"prop",
		Congrats.name,
	);
	expect(propError).toBeUndefined();
});
