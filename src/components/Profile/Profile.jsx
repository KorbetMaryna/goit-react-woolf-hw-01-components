import {formattedNumber} from 'helpers/formatted-number';
import { Card, CardDescription, UserAvatar, UserName, UserTag, UserLocation, StatsList, StatsItem, StatsItemLabel, StatsItemQuantity } from "./Profile.styled";

export const Profile = ({username, tag, location, avatar, stats:{followers, views, likes}}) => {
    return (
        <Card>
            <CardDescription>
                <UserAvatar
                src={avatar}
                alt={tag}
                />
                <UserName>{username}</UserName>
                <UserTag>&#64;{tag}</UserTag>
                <UserLocation>{location}</UserLocation>
            </CardDescription>

            <StatsList>
                <StatsItem>
                <StatsItemLabel>Followers</StatsItemLabel>
                <StatsItemQuantity>{formattedNumber(followers)}</StatsItemQuantity>
                </StatsItem>
                <StatsItem>
                <StatsItemLabel>Views</StatsItemLabel>
                <StatsItemQuantity>{formattedNumber(views)}</StatsItemQuantity>
                </StatsItem>
                <StatsItem>
                <StatsItemLabel>Likes</StatsItemLabel>
                <StatsItemQuantity>{formattedNumber(likes)}</StatsItemQuantity>
                </StatsItem>
            </StatsList>
        </Card>
    )
}

