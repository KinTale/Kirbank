const storage = {  
    saveStorage: (token: string) => {
        localStorage.setItem('token', token);
    },

    loadStorage: () => {
        return localStorage.getItem('token');
    },

    clearStorage: () => {
        localStorage.setItem('token', '');
    }

};

export default storage;