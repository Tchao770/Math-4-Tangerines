import {Link} from 'react-router-dom';
import '../styles/nav.scss';

function Nav({classname}){
    return(
        <div className={classname}>
            <a>Hello</a>
            <a>Hiya</a>
            <a>Whats up</a>
        </div>
    )
}

export default Nav;