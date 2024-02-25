import {changeStatusColor} from 'helpers/change-status.js'
import { FriendItem, FriendStatus, FriendAvatar, FriendName } from './FriendListItem.styled.jsx';

export const FriendListItem = ({ avatar, name, isOnline }) => {
    const statusColor = changeStatusColor(isOnline);
    
    return (
        <FriendItem >
            <FriendStatus color={statusColor} />
            <FriendAvatar src={avatar} alt="User avatar" />
            <FriendName>{name}</FriendName>
        </FriendItem>
    );
}