import { List, Datagrid, TextField, EmailField } from 'react-admin';
import {User} from './UserInterface'


const UserList = (props:User) => (
  <List {...props}>
    <Datagrid>
      <TextField source="name" label = "Nome"/>
      <EmailField source="email" label="E-mail" />
    </Datagrid>
  </List>
);

export default UserList;