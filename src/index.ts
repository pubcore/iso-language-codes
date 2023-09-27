import data from './data'

type Row = typeof data[number]

export type Code = {
	name:  string;
	nativeName: string;
	iso639_1: Row[2];
	iso639_2T: Row[3];
	iso639_2B: Row[4];
}

export const codes: Array<Code> = [];
export const by639_1 = {} as Record<Code['iso639_1'], Code>;
export const by639_2T = {} as Record<Code['iso639_2T'], Code>;
export const by639_2B = {} as Record<Code['iso639_2B'], Code>;

data.forEach(row => {
	var code = {
		name:row[0], nativeName:row[1], iso639_1:row[2], iso639_2T:row[3],
		iso639_2B:row[4]
	}
	by639_1[row[2]] = by639_2T[row[3]] = by639_2B[row[4]] = code
	codes.push(code)
})

export default codes
