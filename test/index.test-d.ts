import {expectType} from 'tsd';
import codes, {by639_1, by639_2B, by639_2T} from 'iso-language-codes'

expectType<Code>(codes[0]);
expectType<Code>(by639_1['de'])
expectType<Code>(by639_2T['deu'])
expectType<Code>(by639_2B['ger'])
//numeric values as key are automatically converted to string, so no type error
expectType<Code>(by639_2B[1])
