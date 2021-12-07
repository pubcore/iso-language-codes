import {expect} from 'chai'
import codes, {by639_1, by639_2T, by639_2B, by639_3} from '../src/index'

const codeKeys = ['iso639_1', 'iso639_2T', 'iso639_2B', 'iso639_3', 'name', 'nativeName']

describe('iso language codes ()', () => {
	it('exports default array of object', () => {
		expect(codes).to.be.an('array')
		codes.forEach(
			code => expect(code).to.have.all.keys(codeKeys)
		)
	})
	it('exports index objects by name: by639_1, by639_2T, by639_2B, and by639_3', () => {
		codes.forEach(
			({iso639_1, iso639_2T, iso639_2B, iso639_3}) => {
				expect(by639_1[iso639_1]).to.have.all.keys(codeKeys)
				expect(by639_2T[iso639_2T]).to.have.all.keys(codeKeys)
				expect(by639_2B[iso639_2B]).to.have.all.keys(codeKeys)
                expect(by639_3[iso639_3]).to.have.all.keys(codeKeys)
			}
		)
	})
})
