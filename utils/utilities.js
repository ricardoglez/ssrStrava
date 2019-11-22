const utilities = {
    getLocalToken: () => {
        try{
            let tk = localStorage.getItem('token');
            console.log(tk);
            if( tk ){
                return tk
            }   
            else {
                return null
            }
        }
        catch(error){
            console.error(error);
            return new Error( 'Something break while getting token' )
        }
    },
    removeLocalToken: () => {
        localStorage.removeItem('token');
    },
    setLocalToken: ( tk ) => {
        if( tk ){
            localStorage.setItem('token', tk);
        }
    }
}

export default utilities;