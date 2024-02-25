import { FriendListItem } from "components/FriendListItem/FriendListItem.jsx";
import { List } from './FriendList.styled.jsx';

export const FriendList = ({ friends }) => (
    <List>
        {friends.map(({id, avatar, name, isOnline}) => (
                <FriendListItem
                    key={id}
                    avatar={avatar}
                    name={name}
                    isOnline={isOnline}
                />
            ))}
        </List>
    )       
