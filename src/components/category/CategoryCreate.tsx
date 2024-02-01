import { Create, SimpleForm, TextInput, PasswordInput, EmailField } from 'react-admin';
import { Category } from './CategoryInterface'

const CategoryCreate = (props: Category) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
    </SimpleForm>
  </Create>
);

export default CategoryCreate;