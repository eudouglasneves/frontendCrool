import { Edit, SimpleForm, TextInput } from 'react-admin';
import { Category } from './CategoryInterface'

const CategoryUpdate = (props:Category) => (
  <Edit {...props}>
    <SimpleForm>
    <TextInput source="name" />
    </SimpleForm>
  </Edit>
);

export default CategoryUpdate;