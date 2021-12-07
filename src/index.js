import data from './data'

export const codes = [], by639_1 = {}, by639_2T = {}, by639_2B = {}, by639_3 = {}

data.forEach(row => {
	var code = {
		name:row[0], nativeName:row[1], iso639_1:row[2], iso639_2T:row[3],
        iso639_2B:row[4], iso639_3:row[5]
	}
	by639_1[row[2]] = by639_2T[row[3]] = by639_2B[row[4]] = by639_3[row[5]] = code
	codes.push(code)
})

export default codes
