import { assertType } from 'vitest'
import codes, {by639_1, by639_2B, by639_2T} from 'iso-language-codes'
import type {Code} from 'iso-language-codes'

assertType<Code>(codes[0]);
assertType<Code>(by639_1['de'])
assertType<Code>(by639_2T['deu'])
assertType<Code>(by639_2B['ger'])
assertType<Code>(by639_2B[1])
