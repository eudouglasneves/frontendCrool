import simpleRestProvider from 'ra-data-simple-rest';

const apiUrl = import.meta.env.VITE_BACKEND_URL;

const dataProvider = simpleRestProvider(apiUrl);

export default dataProvider;