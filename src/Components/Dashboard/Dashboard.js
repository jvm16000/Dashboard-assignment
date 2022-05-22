import { Button } from 'antd'
import React, { useEffect, useRef, useState } from 'react'
import * as d3 from 'd3';
import './Dashboard.css'

const Dashboard = () => {

  const randomArray = (length, max) =>
    Array(length)
      .fill()
      .map(() => Math.round(Math.random() * max));

  console.log(randomArray(4, 200));

  var data = [120, 140, 150, 180];

  // ---------------

  // const margin = { top: 50, right: 30, bottom: 30, left: 60 };
  // const chartwidth =
  //   parseInt(d3.select("#d3demo").style("width")) -
  //   margin.left -
  //   margin.right;
  // const chartheight =
  //   parseInt(d3.select("#d3demo").style("height")) -
  //   margin.top -
  //   margin.bottom;
  //--------------------

  var chart = d3
    .select("svg") // select svg
    .selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", 0)
    .attr("y", function (d, i) {
      return i * 30;
    })
    .attr("width", function (d) {
      return d;
    })
    .attr("height", 25);
  d3.select("Button").on("click", function () {
    // Event listener - later about that!
    // create random data
    data = randomArray(4, 200); // Custom function, we can write your own!
    // update rect widths with enw data
    d3.select("svg")
      .selectAll("rect") // select rects to be updated
      .data(data) // New data binded to rects
      .attr("width", function (d) {
        return d;
      }); // visual attribute to be updated
  });

  
  return (
    <div style={{ marginTop: "45vh", marginLeft: "5vh" }}>
      <svg ref={chart}>
        <rect x="0" y="0" width="120" height="25" />
        <rect x="0" y="30" width="140" height="25" />
        <rect x="0" y="60" width="150" height="25" />
        <rect x="0" y="90" width="180" height="25" />
      </svg>
      <Button>Randomize</Button>
    </div>
  );
};

export default Dashboard;