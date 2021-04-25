import React, { useContext } from 'react';
import { StoreContext } from 'context/StoreContext';
import { getBadgeProps } from 'context/helper/store.helper';
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
import { RightContainer } from 'views/RightContainer';
import { AmountPropertiesBuilder } from 'builders/amount.props.builder';

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

const PointsContainer = ({points, focusColor}) => {
    return (
        <BadgePointsContainer colorType={"error"} maximum={999999} points={points} focusColor={focusColor}>
            <ShoppingCartIcon style={{ fontSize: 35, color: "#FFD700" }} />
        </BadgePointsContainer>
    );
}

const CreateAddPoint = ({theme, title, text, badgeProps, update}) => {
    const loading = badgeProps ? badgeProps.loading : false;
    const ButtonWithPoints = withPoints(AddPoint);
    return (
        <ButtonWithPoints theme={theme} title={title} text={text} loading={loading} update={update} />
    );
}

export const HeaderShop = () => {
    const {
        data: { user, amount, badgePropsLow, badgePropsMiddle, badgePropsHigh },
        mutations: { updateAmountPoints }
    } = useContext(StoreContext);
    const title = amount.pointsGiven === 0 ? "recharge points" : "you've added: " + amount.pointsGiven + " points";
    const points = amount.points ? amount.points : user.points;
    const amountsProps = new AmountPropertiesBuilder().build();
    return (
        <AppBar position="relative" style={{ background : '#2E3B55' }}>
            <Toolbar>
                <IconButton aria-label="cart">
                    {
                        points > 0 
                        ? <PointsContainer points={points} focusColor={badgePropsLow.focusColor} />
                        : <ShoppingCartIcon style={{ fontSize: 35, color: "#FFD700" }} />
                    }
                </IconButton>
                <TextOnlyTooltip title={<UserName user={user} />} placement="right">
                    <IconButton style={{ marginLeft: "55px" }}>
                        <AvatarLetters user={user} />
                    </IconButton>
                </TextOnlyTooltip>
                <RightContainer>
                    {
                        amountsProps.map((ap) => (
                            <CreateAddPoint
                                key={ap.value}
                                value={ap.value}
                                title={title}
                                theme={ap.theme}
                                badgeProps={getBadgeProps(ap.value, badgePropsLow, badgePropsMiddle, badgePropsHigh)}
                                text={ap.text}
                                update={() => updateAmountPoints(ap.value)}
                            />
                        ))
                    }
                </RightContainer>
            </Toolbar>
        </AppBar>
    );
}