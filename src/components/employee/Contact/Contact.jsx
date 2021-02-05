import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidenav from "../Sidenav";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { LoadContact } from "../../actions/index";
import LoaderTemplate from "../templates/LoaderTemplate";

const Contact = () => {
  const spAccessValue = localStorage.getItem("spAccessValue");
  const results = useSelector((state) => state.contact);
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const url = `http://localhost:4050/api/employeedashboard/contact`;
    const getContacts = () => {
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
          dispatch(LoadContact(response.data));
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
        });
    };
    getContacts();
  }, [dispatch]);

  return (
    <React.Fragment>
      {isLoading && <LoaderTemplate title={`Contacts`} />}
      {!isLoading && (
        <div className="dashboard">
          <div className="sidebar">
            <Sidenav />
          </div>
          <div className="main-content">
            <div className="header">
              <div className="title">Contacts</div>
              {
                (spAccessValue==="Yes") && (<Link to="/employeedashboard/contact/add">
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
                    <Link to={`/employeedashboard/contact/${result._id}`}>
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

export default Contact;
