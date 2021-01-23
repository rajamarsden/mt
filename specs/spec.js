import chai from 'chai';
const { expect, Assert } = chai;

describe('Array Test', () => {

    let names = ["Jackson","Rob","Jack","Wilson","John"]

    it('Assert length of Array', () => {
      expect(names.length).to.equal(5);
    })

    it('Assert name contain Daniel', () => {
       assert.isTrue(names.includes('Rob'))
    })
    it('Assert length of an filtered names', () => {
      let filterdNames=names.filter(n=>n.startsWith('Jack'))
      expect(filterdNames.length).to.equal(2);
    })


})
