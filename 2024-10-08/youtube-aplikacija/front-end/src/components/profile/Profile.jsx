import { Link } from 'react-router-dom';
import { IMAGES_URL } from '../../utils/config.js';

const Profile = ({ user }) => {
    return (
        <div>
            <img
                src={IMAGES_URL + user.userThumbnail}
                style={{
                    width: 35,
                    height: 35,
                    objectFit: 'cover'
                }}
                className="rounded-pill"
            />
            <div>
                <ul>
                    <li><Link>Logout</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default Profile;