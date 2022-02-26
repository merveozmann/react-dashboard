import { Money } from "@material-ui/icons"
import "./home.css"
import logo from "../../assets/logo-small.png"
import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Home = () => {
  return (
    <main>
      <div className="left">
        <div className='features'>
          <div className="feature">
            <div className="icon money">
              <Money />
            </div>
            <div className="feature-item">
              <h2>$22,22,22</h2>
              <small className='text-muted'>Earn Of The Month</small>
            </div>
          </div>
          <div className="feature">
            <div className="icon report">
              <Money />
            </div>
            <div className="feature-item">
              <h2>$22,22,22</h2>
              <small className='text-muted'>Earn Of The Month</small>
            </div>
          </div>
          <div className="feature">
            <div className="icon sales">
              <Money />
            </div>
            <div className="feature-item">
              <h2>$22,22,22</h2>
              <small className='text-muted'>Earn Of The Month</small>
            </div>
          </div>
          <div className="feature">
            <div className="icon total">
              <Money />
            </div>
            <div className="feature-item">
              <h2>$22,22,22</h2>
              <small className='text-muted'>Earn Of The Month</small>
            </div>
          </div>
        </div>
        <div className="recent-updates">
          <div className="updates">
          <h2>Recent Updates</h2>
            <div className="update">
              <div className="profile-photo">
                <img src={logo} alt="" />

              </div>
              <div className="message">
                <p><b>Mike Tyson</b>received his order of Night lion tech GPS drone.</p>
                <small className="text-muted">2 Minutes Ago</small>
              </div>
            </div>
            <div className="update">
              <div className="profile-photo">
                <img src={logo} alt="" />

              </div>
              <div className="message">
                <p><b>Mike Tyson</b>received his order of Night lion tech GPS drone.</p>
                <small className="text-muted">2 Minutes Ago</small>
              </div>
            </div>
            <div className="update">
              <div className="profile-photo">
                <img src={logo} alt="" />
              </div>
              <div className="message">
                <p><b>Mike Tyson</b>received his order of Night lion tech GPS drone.</p>
                <small className="text-muted">2 Minutes Ago</small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="chart-cards">
        <div className="chart-card">
          <div className="line-chart">
            <h2>Line Chart</h2>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
              <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>

          </div>

        </div>

      </div>

    </main>
  );
};

export default Home;
