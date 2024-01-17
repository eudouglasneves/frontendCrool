import { Admin, Resource, ListGuesser } from "react-admin";
import dataProvider from "../providers/dataProvider";

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="seller" list={ListGuesser} />
    <Resource name="users" list={ListGuesser} />
    <Resource name="product" list={ListGuesser} />
    <Resource name="category" list={ListGuesser} />
    <Resource name="sales" list={ListGuesser} />
  </Admin>
);

export default App;