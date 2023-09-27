import { expect, test, describe } from 'vitest'
import codes, {by639_1, by639_2T, by639_2B} from '../src/index'

const codeKeys = ['iso639_1', 'iso639_2T', 'iso639_2B', 'name', 'nativeName']

describe('iso language codes ()', () => {
	test('exports default array of object', () => {
		expect(codes).to.be.an('array')
		codes.forEach(
			code => expect(code).to.have.all.keys(codeKeys)
		)
	})
	test('exports index objects by name: by639_1, by639_2T and by639_2B', () => {
		codes.forEach(
			({iso639_1, iso639_2T, iso639_2B}) => {
				expect(by639_1[iso639_1]).to.have.all.keys(codeKeys)
				expect(by639_2T[iso639_2T]).to.have.all.keys(codeKeys)
				expect(by639_2B[iso639_2B]).to.have.all.keys(codeKeys)
			}
		)
	})
})
