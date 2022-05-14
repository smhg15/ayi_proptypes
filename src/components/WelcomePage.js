import Title from "./Title"
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

function WelcomePage(props){
    let {text} = props
    
    return(
        <div>
            <Title text={text.title}/>
            <Link to={text.button==='Go!'? '/proptypes' : '/'}>
                <Button variant="contained" href="#contained-buttons">{text.button}</Button>
            </Link>
            
        </div>
    )
}


export default WelcomePage