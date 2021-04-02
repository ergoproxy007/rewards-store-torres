import React, { useContext } from 'react';
import { StoreContext } from 'context/StoreContext';
import AppBar from '@material-ui/core/AppBar';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import { IconButton } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { AvatarLetters } from 'views/Avatar/AvatarLetters';
import { AddPoint } from 'components/Point/AddPoint';
import BadgePointsContainer from 'components/Point/containers/BadgePointsContainer';
import { withPoints } from 'components/Factory/withPoints';

import "./HeaderShop.css";

const TextOnlyTooltip = withStyles({
    tooltip: {
      color: "black",
      backgroundColor: "transparent",
      hoveredStyle: "pointer"
    }
})(Tooltip);

const UserName = ({user}) => {
    const styles = {fontSize: "1.5rem", color: "white", backgroundColor: "transparent", cursor: "pointer"};
    const name = user ? user.fullName : '';
    return <span style={styles}>{name}</span>
}

const PointsContainer = ({points, badgeProps}) => {
    return (
        <BadgePointsContainer colorType={"error"} maximum={999999} points={points} badgeProps={badgeProps}>
            <ShoppingCartIcon style={{ fontSize: 35, color: "#FFD700" }} />
        </BadgePointsContainer>
    );
}

const AddPointContainer = ({title, pointsGiven, loading, update}) => {
    const ButtonWithPoints = withPoints(AddPoint);
    return (
        <div className="container-addpoint">
            <ButtonWithPoints title={title} pointsGiven={pointsGiven} loading={loading} update={update} />
        </div>
    );
}

export const HeaderShop = () => {
    const subtitle = "haz agregado un total de";
    const {
        data: { user, amount, badgeProps },
        mutations: { updateAmountPoints }
    } = useContext(StoreContext);
    const points = amount.points ? amount.points : user.points;
    return (
        <AppBar position="relative">
            <Toolbar>
                <IconButton aria-label="cart">
                    {
                        points > 0 
                        ? <PointsContainer points={points} badgeProps={badgeProps} />
                        : <ShoppingCartIcon style={{ fontSize: 35, color: "#FFD700" }} />
                    }
                </IconButton>
                <TextOnlyTooltip title={<UserName user={user} />} placement="right">
                    <IconButton style={{ marginLeft: "23px" }}>
                        <AvatarLetters user={user} />
                    </IconButton>
                </TextOnlyTooltip>
                <AddPointContainer pointsGiven={amount.pointsGiven} loading={badgeProps.loading} title={subtitle} update={updateAmountPoints} />
            </Toolbar>
        </AppBar>
    );
}