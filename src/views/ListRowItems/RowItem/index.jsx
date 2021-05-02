import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { LabelPrice } from 'views/LabelPrice';
import { numberWithCommas } from 'config/numbers.util';

const useStyles = makeStyles((theme) => ({
  inline: {
    display: 'inline',
  },
  cost: {
    color: '#ffd700 !important',
    fontWeight: 'bold',
  },
}));

const RowText = ({component, subtitle}) => {
  return (
    <React.Fragment>
      {component}
      <span style={{ color: 'rgba(0, 0, 0, 0.54)' }}>{" — ".concat(subtitle)}</span>
    </React.Fragment>
  );
}

export default function RowItem(props) {
  const { item, index } = props;
  const classes = useStyles();
  const date = 'was redeemed '.concat(item?.createDate.substring(0,10));
  return (
    <>
      <ListItem button alignItems="flex-start">
        {
          item
          ? <>        
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src={item?.img.url} />
                <Typography
                      style={{ marginLeft: '9px' }}
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="primary"
                >
                  ({index})
                </Typography>
              </ListItemAvatar>
              <ListItemText
                primary={
                  <RowText
                  component={<LabelPrice price={numberWithCommas(item?.cost)} />}
                  subtitle={date}
                  />
                }
                secondary={
                  <RowText
                  component={
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                      >
                      {item?.name}
                      </Typography>
                  }
                  subtitle={item?.category}
                  />
                }
              />
           </>
          : null
        }
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
}
