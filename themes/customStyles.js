import {makeStyles} from '@material-ui/core/styles';

const baseStyles = makeStyles(theme => {
    console.log( 'Get Window size', global, global );
    const winSize = {};

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
            backgroundColor:theme.palette.secondary.dark
        },
        textCenter:{
            textAlign:'center',
        },
        error:{
            color:theme.palette.error.light,
        },
        map:{
            marginTop:'1em',
            width:'800px',
            height:'400px',
        }
    }
}); 


export {baseStyles} ;