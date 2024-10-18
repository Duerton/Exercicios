import { changeToBinary } from "../components/Ex1"

describe('<Ex1/>', () => {
    it('test change to binary default', () => {
        expect(changeToBinary(3)).toBe(11);
    })
})