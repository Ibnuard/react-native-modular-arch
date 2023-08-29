import React from 'react';
import {render} from '@testing-library/react-native';
import Spinner from '../spinner';
import {Colors} from '../../styles';

describe('Spinner Component', () => {
  it('renders correctly', () => {
    const {getByTestId} = render(<Spinner />);
    const containerElement = getByTestId('spinner-container');

    expect(containerElement).toBeDefined();
  });

  it('renders ActivityIndicator with correct color', () => {
    const {getByTestId} = render(<Spinner />);
    const activityIndicatorElement = getByTestId('activity-indicator');

    expect(activityIndicatorElement.props.color).toBe(Colors.COLOR_ACCENT);
  });
});
