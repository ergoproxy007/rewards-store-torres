import config from 'config/config';

export const getBadgeProps = (amount, badgePropsLow, badgePropsMiddle, badgePropsHigh) => {
    switch (amount) {
        case config.LOW:
            return badgePropsLow;
        case config.MIDDLE:
            return badgePropsMiddle;
        case config.HIGH:
            return badgePropsHigh;
        default:
            return null;
    }
}
