import {Grid, Typography} from "@mui/material";

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
                {image}
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
