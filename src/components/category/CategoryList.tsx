import { List, Datagrid, TextField, EmailField } from 'react-admin';
import {Category} from './CategoryInterface'


const CategoryList = (props:Category) => (
  <List {...props}>
    <Datagrid>
      <TextField source="name" label = "Nome"/>
    </Datagrid>
  </List>
);

export default CategoryList;