const { succeed, fail, repair, get } = require('./enhancer.js');

let item = {
    name: "Resurrection Stone",
    enhancement: 16,
    durability: 20
}

// test away!
describe('enhancer', () => {
    describe('succeed', () => {
        it("should increase enhancement by 1 if enhancement is < 20", () => {


            // expect(succeed(item)).toBe(1);
            //expect(succeed(item)).toBe(21);
            expect(succeed(item)).toBe(17)
        })
    })

    describe('fail', () => {
        it("should increase or decrease the item's durability depending on the enhancment amount", () => {


            expect(fail(item)).toBe(30);
        })
    })

    describe('repair', () => {
        it("should set durability to 100", () => {
            

            expect(repair(item)).toBe(100);
        })
    })

    describe('get', () => {
        it("should return name + enhancement level", () => {
           

            expect(get(item)).toBe(`[+16] Resurrection Stone`);
            //expect(get(item)).toBe(`Resurrection Stone`)
        })
    })
})