import React from 'react';
import {render} from '@testing-library/react-native';
import Input from '../input';

describe('Input Component', () => {
  it('renders correctly with placeholder', () => {
    const placeholderText = 'Enter your text';
    const {getByPlaceholderText} = render(
      <Input placeholder={placeholderText} />,
    );
    const inputElement = getByPlaceholderText(placeholderText);

    expect(inputElement).toBeDefined();
  });

  it('applies custom container style', () => {
    const customStyle = {backgroundColor: 'red'};
    const {getByTestId} = render(<Input containerStyle={customStyle} />);
    const containerElement = getByTestId('inputTest');

    expect(containerElement).toHaveStyle({backgroundColor: 'red'});
  });
});
