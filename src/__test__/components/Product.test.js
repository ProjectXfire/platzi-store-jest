import React from 'react';
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/provider';
import ProductMock from '../../__mocks__/product';
import Product from '../../components/Product';

describe('<Product />', () => {
  test('Render del componente', () => {
    const product = shallow(
      <ProviderMock>
        <Product />
      </ProviderMock>,
    );
    expect(product.length).toEqual(1);
  });
  test('Comprobar boton de comprar', () => {
    const handleAddToCart = jest.fn(); // Simular una funcion
    const wrapper = mount(
      <ProviderMock>
        <Product
          product={ProductMock}
          handleAddToCart={handleAddToCart}
        />
      </ProviderMock>,
    );
    wrapper.find('button').simulate('click');
    expect(handleAddToCart).toHaveBeenCalledTimes(1);
  });
});
