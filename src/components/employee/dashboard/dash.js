import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidenav from "../Sidenav";
import {  useDispatch } from "react-redux";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Line } from 'react-chartjs-2';

const Dash = () => {
  const [isLoading, setLoading] = useState(true);

  
  const dispatch = useDispatch();

  const [chartData, setchartData] = useState({});

useEffect(() => {
    const url =
      "https://devvishal-crm-backend.herokuapp.com/api/employeedashboard/getCount";

    const getCount = async () => {
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
          let LineData = [response.data.serviceRequestCount, response.data.leadCount, response.data.contactCount];
          setchartData({
            labels: ['Service Requests', 'Contacts', 'Leads'],
            datasets: [
              {
                label: 'Count',
                data: LineData,
                backgroundColor: [
                  'rgb(105,105,105)',
                  
                  
                ]
              }
            ]
          });
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    };
    getCount();
  }, [dispatch]);

  return (

    <React.Fragment>
      {isLoading && (
        <div className="dashboard">
          <div className="sidebar">
            <Sidenav />
          </div>
          <div className="main-content">
            <div className="header">
              <div className="title">DashBoard </div>

            </div>
            <hr />
            <div className="content">
              <div className="loading">
                <Loader type="Audio" color="#897eff" height={100} width={100} />
                <p>Loading Dashboard...</p>
              </div>
            </div>
          </div>
        </div>
      )}
      {!isLoading && (

        <div className="dashboard">
          <div className="sidebar">
            <Sidenav />
          </div>
          <div className="main-content vh">
            <div className="header">
              <div className="title">DashBoard </div>

            </div>
            <hr />
            <div className="chart">
            <Line data={chartData}/>
            </div>
          </div>
        </div>



      )}
    </React.Fragment>
  );
};

export default Dash;