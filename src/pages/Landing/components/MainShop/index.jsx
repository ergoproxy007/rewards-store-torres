import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import ProductContainer from 'components/Product/containers/ProductContainer';

import { useStyles } from './styles';
import config from 'config/config';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export const MainShop = (props) =>{
    const title = config.ELECTRONIC.toString().concat(config.WEB_NAME);  
    const classes = useStyles();
    return (
        <main>
            <div className={classes.heroContent}>
                <Container maxWidth="md">
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>{title}</Typography>
                    <Typography variant="h5" align="center" color="textSecondary" paragraph>
                        Something short and leading about the collection below—its contents, the creator, etc.
                    </Typography>
                    <div className={classes.heroButtons}>
                    <Grid container spacing={2} justify="center">
                        <Grid item>
                        <Button variant="contained" color="primary">
                            Main call to action
                        </Button>
                        </Grid>
                        <Grid item>
                        <Button variant="outlined" color="primary">
                            Secondary action
                        </Button>
                        </Grid>
                    </Grid>
                    </div>
                </Container>
            </div>
            <Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={4}>
                    {
                        cards.map((card) => (
                            <ProductContainer key={card} card={card} /> 
                        ))
                    }
                </Grid>
            </Container>
      </main>
    );
}
