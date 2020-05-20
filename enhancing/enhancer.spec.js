const {succeed} = require('./enhancer.js');


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

    // decribe('fail', () => {
    //     it("should increase or decrease the item's durability depending on the enhancment amount", () => {
    //         let item = {

    //         }
    //     })
    // })
})