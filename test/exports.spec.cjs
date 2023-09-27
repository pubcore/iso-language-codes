
//since this is executed in context of vitest, we can use import/export, too
import { expect, test } from 'vitest';

//test commonjs exports, see "prepublishOnly" script in package.json
const codes = require('iso-language-codes');
const {by639_1, by639_2T, by639_2B} = require('iso-language-codes');

test('commonjs exports', ()=>{
    expect(codes).toBeDefined()
    expect(by639_1).toBeDefined()
    expect(by639_2T).toBeDefined()
    expect(by639_2B).toBeDefined()
})