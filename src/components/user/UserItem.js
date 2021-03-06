import { Link } from 'react-router-dom';
import ItemContent from '../shared/ItemContent';

const UserItem = ({ user }) => {
  return (
    <Link to={`user/profile/${user._id}`}>
      <div className="user">
        <div
          className="user__img"
          style={{
            backgroundImage: `url(${`http://localhost:9000/${user.image}`})`,
          }}
        ></div>
        <ItemContent
          title={user.username}
          description={user.playlists.length}
        />
      </div>
    </Link>
  );
};

export default UserItem;
