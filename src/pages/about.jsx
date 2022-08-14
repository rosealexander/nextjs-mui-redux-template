import Page from "../layouts/Page";
import Footer from "../components/Footer";
import Navigation from "../features/navigation/navigation";

const About = () =>
  <Page
    header={<Navigation />}
    body={"About"}
    footer={<Footer />}
  />


export default About;
