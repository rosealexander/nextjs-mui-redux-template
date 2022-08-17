import {useSelector} from "react-redux";
import {selected} from "../features/navigation/navigationSlice";
import {Divider, Grid, Typography} from "@mui/material";
import Box from "@mui/material/Box";

const Subheader = () => {
  const [key, value] = useSelector(selected)

  return (
    <Grid container justifyContent='center'>
      <Grid item>
        <Box
          width={500}
          maxWidth='85vw'
        >
          <Divider>
            <Typography variant='h3'>
              {value.label}
            </Typography>
          </Divider>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Subheader;
