import { Edit, SimpleForm, TextInput, PasswordInput } from 'react-admin';
import { User } from './UserInterface'

const UserUpdate = (props: User) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="name" />
      <TextInput source="email" />
      <PasswordInput source="password" />
    </SimpleForm>
  </Edit>
);

export default UserUpdate;