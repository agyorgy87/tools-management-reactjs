import renderer from 'react-test-renderer';
import Search from "../components/Search.js";

test("test Search", () => {
    let tree = renderer
    .create(<Search data={[]} setData={() => {}}/>)
    .toJSON()
    expect(tree).toMatchSnapshot();
});
