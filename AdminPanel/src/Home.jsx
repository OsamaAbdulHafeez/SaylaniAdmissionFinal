import React from "react";
import { BsPeopleFill } from "react-icons/bs";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

import { FaCity, FaLeanpub, FaChalkboard } from "react-icons/fa";

import { jsonToCSV } from "react-papaparse";

const exportToCsv = async (data) => {
  const csv = await jsonToCSV(data);
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "data.csv";
  link.click();
};

function Home() {
  const courseAdmissionsData = [
    { course: "WMA", count: 150 },
    { course: "Amazon", count: 120 },
    { course: "Graphic", count: 130 },
    { course: "AI", count: 500 },
    { course: "Cloud", count: 340 },
  ];

  const citylyAdmissionsData = [
    { city: "Khi", count: 1000 },
    { city: "Lhr", count: 500 },
    { city: "Isb", count: 2500 },
    { city: "Qta", count: 550 },
    { city: "Gwd", count: 5000 },
    { city: "Rwl", count: 0 },
    { city: "Hyd", count: 90 },
    { city: "Mul", count: 980 },
  ];

  return (
    <main className="main-container">
      <div className="main-title">
        <h3>DASHBOARD</h3>
      </div>

      <div className="main-cards">
        <div className="card">
          <div className="card-inner">
            <h3>Students</h3>
            <BsPeopleFill className="card_icon" />
          </div>
          <h1>300</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>Courses</h3>
            <FaChalkboard className="card_icon" />
          </div>
          <h1>12</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>Skills</h3>
            <FaLeanpub className="card_icon" />
          </div>
          <h1>33</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>Cities</h3>
            <FaCity className="card_icon" />
          </div>
          <h1>42</h1>
        </div>
      </div>

      <div className="csv-buttons">
        <button onClick={() => exportToCsv(courseAdmissionsData)}>
          Export to CSV
        </button>
        <button onClick={() => exportToCsv(citylyAdmissionsData)}>
          Export to CSV
        </button>
      </div>

      <div className="charts">
        <ResponsiveContainer width="80%" height="80%">
          <BarChart width={600} height={300} data={courseAdmissionsData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="course" name="Courses"/>
            <YAxis name="No of Students" />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="80%" height="80%">
          <LineChart width={600} height={300} data={citylyAdmissionsData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="city" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="count" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </main>
  );
}

export default Home;
