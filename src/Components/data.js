import React, { Component } from 'react';

class Data extends Component {
  render() {
    return (
      <section className="main">
        <div className="main-jobs">
          <div className="job">
            <h3 className="job-title">job title</h3>
            <div>job image 1</div>
            <button className="job-btn">button</button>
          </div>
          <div className="job">
            <h3 className="job-title">job title</h3>
            <div>job image 2</div>
            <button className="job-btn">button</button>
          </div>
          <div className="job">
            <h3 className="job-title">job title</h3>
            <div>job image 3</div>
            <button className="job-btn">button</button>
          </div>
        </div>
        <div className="main-info"> Data here</div>
      </section>
    );
  }
}

export default Data;
