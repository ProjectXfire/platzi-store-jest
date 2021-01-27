import reducer from '../../reducers/index';
import ProductMock from '../../__mocks__/product';

describe('Reducers', () => {
  test('Retornar initial state', () => {
    expect(reducer({}, '')).toEqual({});
  });
  test('addToCart', () => {
    const initial = {
      cart: [],
    };
    const payload = ProductMock;
    const action = {
      type: 'ADD_TO_CART',
      payload,
    };
    const expected = {
      cart: [
        ProductMock,
      ],
    };
    expect(reducer(initial, action)).toEqual(expected);
  });
});
