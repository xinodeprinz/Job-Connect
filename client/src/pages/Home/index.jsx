import "./styles.css";
import Layout from "../../components/RootLayout";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Layout>
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="card">
              <div className="card-header fs-2 fw-bold bg-primary text-white">
                Job Connect
              </div>
              <div className="card-body">
                <p>This website uses the following:</p>
                <ul className="list-group list-group-flush list-group-numbered">
                  <li className="list-group-item">Reactjs</li>
                  <li className="list-group-item">React Redux toolkit</li>
                  <li className="list-group-item">Bootstrap 5</li>
                  <li className="list-group-item">
                    React icons for icons <FaHome />
                  </li>
                  <li className="list-group-item">
                    React router dom for routing
                  </li>
                </ul>
                <p>
                  Please take note and maintain the project structure during
                  development. You can find the component that renders this page
                  in the <strong>src/pages/Home/index.jsx</strong>
                </p>
                <p>
                  Every necessary thing for this project has been setup already,
                  but you may need to install further dependencies as
                  development proceeds.
                </p>

                <Link to={"/about"} className="btn btn-outline-primary mb-2">
                  Go to about page
                </Link>
                <hr />
                <h1 className="text-center">Happy coding!! 😂😂</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
