/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/consistent-type-assertions */
/// <reference types="@rbxts/testez/globals" />

import { reverseArray } from "./ReverseArray";

export = () => {
	it("should return an empty array for an empty array input", () => {
		const inputArray = new Array<defined>();
		const result = reverseArray(inputArray);
		expect(result.size()).to.equal(0);
	});

	it("should return an array of the same one item for a single element array input", () => {
		const inputArray = [1];
		const result = reverseArray(inputArray);
		expect(result.size()).to.equal(1);
		expect(result[0]).to.equal(inputArray[0]);
	});

	it("should return a reversed array for an array of length > 1", () => {
		const inputArray = [0];
		for (let i = 1; i <= 25; i++) {
			inputArray.push(i);

			const result = reverseArray(inputArray);
			expect(result.size()).to.equal(inputArray.size());

			for (let j = i; j >= 0; j--) {
				expect(result[i - j]).to.equal(inputArray[j]);
			}
		}
	});
};
