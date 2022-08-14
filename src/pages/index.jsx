import Page from "../layouts/Page";
import Navigation from "../features/navigation/navigation";
import Footer from "../components/Footer";
import Image from "next/image";
import Blog from "../layouts/Blog";
import {Typography} from "@mui/material";
import Subheader from "../components/Subheader";

const Index = () =>
  <Page
    header={<Navigation />}
    subheader={<Subheader />}
    body={
      <Blog
        timestamp={"2022-01-01"}
        header={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}
        content={
          <Typography
            variant='body1'
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Gravida cum sociis natoque penatibus. Laoreet non curabitur gravida arcu. Amet mattis vulputate enim nulla aliquet. Lacus viverra vitae congue eu consequat ac. Morbi quis commodo odio aenean sed adipiscing diam donec. Fermentum iaculis eu non diam. Lacus laoreet non curabitur gravida arcu ac tortor dignissim convallis. Nec dui nunc mattis enim. Id interdum velit laoreet id donec. Elit eget gravida cum sociis natoque penatibus. Enim lobortis scelerisque fermentum dui faucibus in. Morbi tristique senectus et netus. Condimentum mattis pellentesque id nibh tortor id aliquet.
            <br /><br />
            Consectetur libero id faucibus nisl tincidunt. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Malesuada pellentesque elit eget gravida cum sociis natoque. Tempor commodo ullamcorper a lacus. Integer quis auctor elit sed vulputate mi. Nibh venenatis cras sed felis eget velit. Curabitur vitae nunc sed velit dignissim sodales. Sit amet consectetur adipiscing elit pellentesque. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus. Luctus accumsan tortor posuere ac ut consequat semper. Aenean euismod elementum nisi quis. Risus commodo viverra maecenas accumsan lacus. Nisl vel pretium lectus quam id leo. In iaculis nunc sed augue lacus viverra vitae congue eu. Bibendum at varius vel pharetra vel. Erat imperdiet sed euismod nisi porta lorem. Malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Id diam vel quam elementum pulvinar etiam non quam lacus. Risus nec feugiat in fermentum posuere urna nec tincidunt praesent.
          </Typography>
        }
        image={
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Manhattan_Bridge_Construction_1909.jpg/1600px-Manhattan_Bridge_Construction_1909.jpg?20061105033707"
            alt="A greek word that means poison and medicine at the same time."
            width="560"
            height="384"
          />
        }
      />
    }
    footer={<Footer />}
  />

export default Index;
