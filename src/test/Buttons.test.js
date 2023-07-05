import renderer from 'react-test-renderer';
import Buttons from "../components/Buttons.js";

test("test Buttons", () => {
    let tree = renderer
    .create(<Buttons data={[]} setData={() => {}}/>)
    .toJSON()
    expect(tree).toMatchSnapshot();
});