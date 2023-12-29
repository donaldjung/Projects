const {default: TestRunner } = require("jest-runner")
const addNum = require(`./addNumber`);

test('returns the num + num', () => {
    expect(addNum(1)).toBe(2);

})

test('check function exists', function() {
    expect(addNum).toBeDefined();
    expect(console.log).toBeCalled();
})
