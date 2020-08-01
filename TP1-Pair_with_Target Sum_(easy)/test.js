const pair_with_targetsum = require('./index');

test('Function exists', () => {
    expect(typeof pair_with_targetsum.prototype.constructor).toEqual('function');
});

test('Pair of number exists', () => {
    expect(pair_with_targetsum([1, 2, 3, 4, 6], 6).join(',')).toEqual('1,3');
    expect(pair_with_targetsum([2, 5, 9, 11], 11).join(',')).toEqual('0,2');
});

test('Pair of number does not exist', () => {
    expect(pair_with_targetsum([1, 2, 3, 4, 6], 20).join(',')).toEqual('-1,-1');
    expect(pair_with_targetsum([2, 5, 9, 11], 4).join(',')).toEqual('-1,-1');
});