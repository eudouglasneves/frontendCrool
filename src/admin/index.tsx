import { Admin, Resource } from "react-admin";
import dataProvider from "../providers/dataProvider";
import { authProvider } from "../providers/authProvider";
import UserList from "../components/user/UserList";
import UserCreate from "../components/user/UserCreate";
import UserUpdate from "../components/user/UserUpdate";
import CategoryList from "../components/category/CategoryList";
import CategoryCreate from "../components/category/CategoryCreate";
import CategoryUpdate from "../components/category/CategoryUpdate";
import ProductCreate from "../components/product/ProductCreate";
import ProductList from "../components/product/ProductList";

const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider} >
    
    <Resource name="users" list={UserList} create={UserCreate} edit={UserUpdate} />
    <Resource name="product" list={ProductList} create={ProductCreate} />
    <Resource name="category" list={CategoryList} create={CategoryCreate} edit={CategoryUpdate}/>
    
  </Admin>
);

export default App;