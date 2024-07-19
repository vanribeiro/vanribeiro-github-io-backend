import dateConvert from "../../utils/date-convert";

describe('dateConvert function', () => {

    it("should convert a date string to a readable format", () => {
        const inputDate = "2022-03-21T05:03:06Z";
        const expectedOutput = "21/03/2022";
        const actualOutput = dateConvert(inputDate);

        expect(actualOutput).toBe(expectedOutput);
    });
    
});