import renderer from 'react-test-renderer';
import {fireEvent, render, screen} from '@testing-library/react-native';
import Button from '.';
// test button render correctly
describe('button render tests', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Button title="Button" />);
    expect(tree).toMatchSnapshot();
  });

  it('should render given title', () => {
    const title = 'Button';
    const {getByText} = render(<Button title={title} />);
    const titleElement = getByText(title);

    expect(titleElement).toBeDefined();
  });

  it('calls onPress when pressed', () => {
    const onPressMock = jest.fn();
    const {getByText} = render(
      <Button title="Test Button" onPress={onPressMock} />,
    );
    const button = getByText('Test Button');

    fireEvent.press(button);

    expect(onPressMock).toHaveBeenCalled();
  });
});
