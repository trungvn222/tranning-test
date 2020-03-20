export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[demo-test="${val}"]`);
};
