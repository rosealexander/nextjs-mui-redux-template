import {Grid, Typography} from "@mui/material";
import Box from "@mui/material/Box";

const Blog = ({timestamp, header, image, content}) => {
  return (
    <Grid
      container
      direction='row'
      justifyContent='center'
    >
      <Grid item>
        <Grid
          container
          direction='column'
          spacing={3}
        >
          <Grid item>
            <Typography
              variant='body2'
            >
              {timestamp}
            </Typography>
            <Typography
              variant='h2'
            >
              {header}
            </Typography>
          </Grid>
          <Grid item>
            <Grid
              container
              justifyContent='center'
            >
              <Grid item>
                <Box maxWidth='100%'>
                  {image}
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            {content}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Blog;
