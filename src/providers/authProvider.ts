
import { AuthProvider } from "react-admin";

export const authProvider: AuthProvider = {

    login: async ({ username , password }) => {
        const response = await fetch('http://localhost:3000/users');
        const userList = await response.json();
        const user = userList.find((user: { email: string; }) => user.email == username);

        if(user.password == password ){
            localStorage.setItem("username", username);
            return Promise.resolve();

        }
        else{
            return Promise.reject()
        }
        

    },

    logout: () => {
        localStorage.removeItem("username");
        return Promise.resolve();
    },

    checkError: ({ status }: { status: number }) => {
        if (status === 401 || status === 403) {
            localStorage.removeItem("username");
            return Promise.reject();
        }
        return Promise.resolve();
    },

    checkAuth: () => {
        return localStorage.getItem("username")
            ? Promise.resolve()
            : Promise.reject();
    },

    getPermissions: () => Promise.resolve(),
};