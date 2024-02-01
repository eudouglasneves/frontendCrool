import React, { useState, useEffect } from 'react';

interface Product {
  id: number;
  title: string;
}

interface CategoryWithProducts {
  categoryId: number;
  categoryName: string;
  products: Product[];
}

const Dashboard: React.FC = () => {
  const [categoriesWithProducts, setCategoriesWithProducts] = useState<CategoryWithProducts[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriesResponse = await fetch(`${import.meta.env.VITE_BACKEND_URL}/categories`);
        const categoriesData: CategoryWithProducts[] = await categoriesResponse.json();
        setCategoriesWithProducts(categoriesData);
      } catch (error) {
        console.error('Erro ao obter dados:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {categoriesWithProducts.map((categoryWithProducts: CategoryWithProducts) => (
        <div key={categoryWithProducts.categoryId}>
          <h2>{`Categoria ${categoryWithProducts.categoryName}`}</h2>
          <p>{`Quantidade de Produtos: ${categoryWithProducts.products.length}`}</p>
          {/* Adicione um botão ou link para exibir os produtos */}
        </div>
      ))}
    </div>
  );
};

export default Dashboard;