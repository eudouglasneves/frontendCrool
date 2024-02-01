import { List, Datagrid, TextField, NumberField, ReferenceField } from 'react-admin';
import { Product } from './ProductInterface';

const ProductList = (props: Product) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="title" label="Título" />
      <NumberField source="price" label="Preço" />
      <ReferenceField label="Categoria" source="categoryID" reference="category">
        <TextField source="name" />
      </ReferenceField>
      {/* Outros campos, se necessário */}
    </Datagrid>
  </List>
);

export default ProductList;