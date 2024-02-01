import { Create, SimpleForm, TextInput, PasswordInput, EmailField } from 'react-admin';
import { User } from './UserInterface'

const UserCreate = (props: User) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="email" />
      <PasswordInput source="password" />
    </SimpleForm>
  </Create>
);

export default UserCreate;