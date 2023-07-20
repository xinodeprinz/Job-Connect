import "./styles.css";
import Layout from "../../components/RootLayout";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Layout>
      <h1>About Page</h1>
      <Link to={"/"}>Home</Link>
    </Layout>
  );
};

export default About;
