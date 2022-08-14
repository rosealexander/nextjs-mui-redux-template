import {Box, Divider, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import Link from "./Link";
import Image from "next/image";

const Footer = () => {
  return (
    <Box sx={{py: 3}}>
      <Divider sx={{my: 1}}/>
      <Grid
        container
        alignItems='center'
        justifyContent='space-between'
      >
        <Grid item xs>
          <Grid
            container
            justify='center'
            alignItems='center'
            direction='column'
          >
            <Grid item>
              <Typography
                variant="caption"
                color="textSecondary"
                display='inline'
              >
                (ɔ) 2021 cop·y·left
              </Typography>
            </Grid>
            <Grid item>
              <Grid
                container
              >
                <Grid item>
                  <Typography
                    variant="caption"
                    color="textSecondary"
                    display='inline'
                  >
                    /ˈkäpēˌleft/ &nbsp;
                  </Typography>
                </Grid>
                <Grid item>
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/2/28/Licence_Art_Libre.svg"
                    alt="Licence Art Libre.svg"
                    height="13"
                    width="33"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs zeroMinWidth>
          <Typography
            variant="caption"
            color="textSecondary"
          >
            <small>
              This is a free work, you can copy, distribute, and<br />
              modify it under the terms of the <Link href={"https://artlibre.org/licence/lal/en/"}>Free Art License</Link>
            </small>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Footer
