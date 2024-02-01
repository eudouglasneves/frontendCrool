
import { Create, SimpleForm, TextInput, NumberInput, SelectInput, } from 'react-admin';
import { Product } from './ProductInterface';
import { useEffect, useState } from 'react';

const ProductCreate = (props: Product) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/category`);
        const categoriesData = await response.json();
        setCategories(categoriesData);
      } catch (error) {
        console.error('Erro ao obter categorias:', error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="title" label="Nome do Produto" />
        <NumberInput source="price" label = "Preço"/>
        <SelectInput
          source="categoryID"
          label="Categoria"
          choices={categories.map((category: { id: number; name: string }) => ({
            id: category.id,
            name: category.name,
          }))}
        />
      </SimpleForm>
    </Create>
  );
};

export default ProductCreate;