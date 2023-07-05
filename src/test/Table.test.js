import renderer from 'react-test-renderer';
import Table from "../components/Table.js";

test("test empty array", () => {
    let tree = renderer
    .create(<Table data={[]}/>)
    .toJSON()
    expect(tree).toMatchSnapshot();
});

test("test with data", () => {
    let list = [{Name: "Feri", Description: "well done", Quantity: "1", Price: "1000"}];
    let tree = renderer
    .create(<Table data={list}/>)
    .toJSON()
    expect(tree).toMatchSnapshot();
});