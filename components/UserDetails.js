import { Link } from 'react-router-dom';

import './UserDetails.css';
import { useContext } from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext';

function UserDetails() {
    const { currentUser } = useContext(CurrentUserContext);
    return (
        <div className="user-details-component">
            { currentUser.username}
            ? (
                <div>
                    <p>{currentUser.username}</p>
                </div>
            ) : <Link to="/login">Log In</Link>
        </div>
    );
}

export default UserDetails