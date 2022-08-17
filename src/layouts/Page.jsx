import {memo} from "react";
import {Grid} from "@mui/material";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

const Page = memo(({header, subheader, body, footer}) => {
  return (
    <Container
      maxWidth='sm'
    >
      <Box
        display='flex'
        flexDirection='column'
        justifyContent='space-between'
        height='100vh'
        minWidth={350}
        py={3}
        px={1}
      >
        <Grid
          container
          direction='column'
          spacing={5}
        >
          <Grid item>
            {header}
          </Grid>
          <Grid item>
            {subheader}
          </Grid>
          <Grid item>
            {body}
          </Grid>
        </Grid>
        {footer}
      </Box>
    </Container>
  )
})

Page.displayName = "Page"

export default Page;
