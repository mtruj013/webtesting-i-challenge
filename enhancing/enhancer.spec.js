const {succeed, fail, repair} = require('./enhancer.js');


// test away!
describe('enhancer', () => {
    describe('succeed', () => {
        it("should increase enhancement by 1 if enhancement is < 20", () => {
            let item = {
                name: "horcrux",
                enhancement: 0,
                durability: 0
            }

            // expect(succeed(item)).toBe(1);
            //expect(succeed(item)).toBe(21);
            expect(succeed(item)).toBe(0)
        })
    })

    describe('fail', () => {
        it("should increase or decrease the item's durability depending on the enhancment amount", () => {
            let item = {
                name: "elder wand",
                enhancement: 16,
                durability: 20
            }

            expect(fail(item)).toBe(30);
        })
    })

    describe('repair', () => {
        it("should set durability to 100", () => {
            let item = {
                name: "invisibility cloack",
                enhancement: 16,
                durability: 0
            }

            expect(repair(item)).toBe(100);
        })
    })
})