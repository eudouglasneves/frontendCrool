import simpleRestProvider from 'ra-data-simple-rest';

const apiUrl = 'http://localhost:3000';

const dataProvider = simpleRestProvider(apiUrl);

export default dataProvider;