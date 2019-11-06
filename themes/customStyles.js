import {makeStyles} from '@material-ui/core/styles';

const baseStyles = makeStyles(theme => {
    return {
        root:{
            flexGrow: 1,
        },
        mainConteiner:{
            marginTop:theme.spacing(3),
        },
        appBar:{
            flexDirection:'row !important',
            flex:'1 auto',
            alignItems:'center'
        },
        linkWithoutStyle:{
            textDecoration:'none',
            color:'#fff'
        },
        avatar:{
            margin:'4pt',
            backgroundColor:theme.palette.secondary
        },
        textCenter:{
            textAlign:'center',
        }
    }
}); 


export {baseStyles} ;