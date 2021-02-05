import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Sidenav from "../Sidenav";
import { useSelector, useDispatch } from "react-redux";
import { LoadService } from "../../actions/index";
import LoaderTemplate from "../templates/LoaderTemplate";

const ServiceRequest = () => {
  const results = useSelector((state) => state.service);
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(true);
  const spAccessValue = localStorage.getItem("spAccessValue");

  useEffect(() => {
    const getServiceRequest = async () => {
      const url =
        "http://localhost:4050/api/employeedashboard/servicerequest";
      const token = localStorage.getItem("token");
      axios({
        url: url,
        method: "get",
        headers: {
          "auth-token": token,
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          setIsLoading(false);
          dispatch(LoadService(response.data));
        })
        .catch((err) => {
          setIsLoading(false);
          console.log(err);
        });
    };
    getServiceRequest();
  }, [dispatch]);

  return (
    <React.Fragment>
      {isLoading && <LoaderTemplate title={`Service Request`} />}
      {!isLoading && (
        <div className="dashboard">
          <div className="sidebar">
            <Sidenav />
          </div>
          <div className="main-content">
            <div className="header">
              <div className="title">Service Request</div>

              {/* Added ADD BUTTON to add a service request by Employee */}
              {
                (spAccessValue==="Yes") && (<Link to="/employeedashboard/servicerequest/add">
                  <button type="button">
                    Add <i className="material-icons">&#xe147;</i>
                  </button>
                </Link>)
              }
              
            </div>
            <hr />
            <div className="content">
              <ul>
                {results.map((result) => (
                  <li key={result._id}>
                    <p>{result.title}</p>
                    <Link
                      to={`/employeedashboard/servicerequest/${result._id}`}
                    >
                      <button className="main_btn">View</button>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default ServiceRequest;
