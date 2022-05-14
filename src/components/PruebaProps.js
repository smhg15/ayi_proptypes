import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import Title from "./Title"

function PruebaProps({ejNumber, ejArray, text}){

    return(
        <div>
            <Title text={text.title}/>
            <h3>please check the console</h3>
            <ul>
                <li>Ey! be a good Math operation... Mr. PruebaProps: {ejNumber * 2}</li>
                <li>Could I map you?: pst.. the console is answering you...{ejArray.map((e)=>console.log (e))}</li>
            </ul>
            <Link to={text.button==='Go!'? '/proptypes' : '/'}>
                <Button variant="contained" href="#contained-buttons">{text.button}</Button>
            </Link>
        </div>
    )
}

PruebaProps.propTypes = {
    name: PropTypes.any.isRequired,
    ejString: PropTypes.string, 
    ejNumber: PropTypes.number.isRequired,
    ejArray: PropTypes.array, 
    ejArrayOfNumbers: PropTypes.arrayOf(PropTypes.number), 
    ejArrayOfArray: PropTypes.arrayOf(PropTypes.array),
    stringOrNumber: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    state: PropTypes.oneOf(['Loading', 'Ready']),
    ejElemento: PropTypes.element,
    // shape solo indica lo que si o si debe tener, pero si hay algo extra no salta. Para eso se unsa "exact"
    ejShape: PropTypes.shape({
        texto: PropTypes.string,  
        unArreglo: PropTypes.array,
    }),
    ejRenderable: PropTypes.node //node se usa para algo que se pueda renderizar (x ej no un objeto)
};

export default PruebaProps