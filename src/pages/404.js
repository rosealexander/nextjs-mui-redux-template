import {Box, Divider, Grid, Typography} from "@mui/material";

const Custom404 = () => {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '100vh' }}
    >
      <Grid item>
        <Box width={500}>
          <Divider>
            <Grid
              container
              wrap='nowrap'
              direction='row'
              alignItems='center'
              spacing={2}
            >
              <Grid item>
                <Typography
                  variant='h1'
                  sx={{fontStyle: 'italic'}}
                >
                  404
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant='body1'
                  sx={{fontStyle: 'italic'}}
                >
                  Page Not Found
                </Typography>
              </Grid>
            </Grid>
          </Divider>
        </Box>
      </Grid>
    </Grid>

  )
}

export default Custom404;
