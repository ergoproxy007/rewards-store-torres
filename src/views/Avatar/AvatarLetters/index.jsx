import Avatar from '@material-ui/core/Avatar';

export const AvatarLetters = ({user}) => {
    const fullName = user ? user.fullName : '';
    const acronym = fullName.length > 2 ? fullName.split(" ").map(l=>l[0]).join("") : '?';
    return <Avatar alt={fullName}>{acronym}</Avatar>
}
