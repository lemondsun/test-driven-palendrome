const palindromes = require('../palindromes')

describe('palindromes', () => {
  
    it('returns an empty array when given no palindromes', () => {
    expect(palindromes('tic tac toe')).toEqual([]);
    });
    it('ignores casing', () => {
    expect(palindromes('WoW')).toEqual(['wow']);
    });
    it('ignores punctuation', () => {
    expect(palindromes('yo, banana boy!')).toEqual(['yobananaboy']);
    });
    it('detects multi-word palindromes', () => {
    expect(palindromes('A man, a plan, a canal, Panama')).toEqual([
    'amanaplanacanalpanama',
    ]);
  });
})