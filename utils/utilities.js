const utilities = {
    getLocalToken: () => {
        try{
            let tk = localStorage.getItem('token');
            if( tk ){
                return tk
            }   
            else {
                return null
            }
        }
        catch(error){
            throw 'Something break while getting token'
        }
    },
    removeLocalToken: () => {
        localStorage.removeItem('token');
    },
    setLocalToken: ( tk ) => {
        if( !tk ){

        }
    }
}