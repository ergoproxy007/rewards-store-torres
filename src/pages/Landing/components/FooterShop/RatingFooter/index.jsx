import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

export default function RatingFooter() {
  const FOUR = 4;
  const FIVE = 5;
  return (
    <div>
    <Grid container >
        <Grid item>
            <Box component="fieldset" mb={1} borderColor="transparent">
                <Typography component="legend" color="primary">React</Typography>
                <Rating name="read-only" value={FOUR} readOnly />
            </Box>
        </Grid>
        <Grid item>
            <Box component="fieldset" mb={1} borderColor="transparent">
                <Typography component="legend" color="primary">Redux</Typography>
                <Rating name="read-only" value={FIVE} readOnly />
            </Box>
        </Grid>
        <Grid item>
            <Box component="fieldset" mb={1} borderColor="transparent">
                <Typography component="legend" color="primary">Hooks</Typography>
                <Rating name="read-only" value={FOUR} readOnly />
            </Box>
        </Grid>
        <Grid item>
            <Box component="fieldset" mb={1} borderColor="transparent">
                <Typography component="legend" color="primary">Material-UI</Typography>
                <Rating name="read-only" value={FOUR} readOnly />
            </Box>
        </Grid>
        <Grid item>
            <Box component="fieldset" mb={1} borderColor="transparent">
                <Typography component="legend" color="primary">Semantic-UI</Typography>
                <Rating name="read-only" value={FIVE} readOnly />
            </Box>
        </Grid>
      </Grid>
    </div>
  );
}
