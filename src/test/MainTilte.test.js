import renderer from 'react-test-renderer';
import MainTitle from "../components/MainTitle.js";

test("test MainTitle", () => {
    let tree = renderer
    .create(<MainTitle data={[]} setData={() => {}}/>)
    .toJSON()
    expect(tree).toMatchSnapshot();
});