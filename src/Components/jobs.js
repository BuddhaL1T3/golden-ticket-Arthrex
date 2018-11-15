import React, { Component } from 'react';

class Jobs extends Component {
  render() {
    return (
      <div className="main-jobs">
        <div className="job">
          <h3 className="job-title">Possible Position - Jr. Full Stack Developer</h3>
          <a className="job-a" href="mailto:jmriggs75@gmail.com?subject=Arthrex Application Response!">
            <img className="job-img" src={require('../jr-fs-dev.jpg')} alt="Junior Full Stack Developer" />
          </a>
          <a href="mailto:jmriggs75@gmail.com?subject=Arthrex Application Response!">
            <button className="job-btn">Reach Out to Discuss Opportunity</button>
          </a>
        </div>
        <div className="job">
          <h3 className="job-title">Desired Position - Full Stack Developer</h3>
          <a className="job-a" href="mailto:jmriggs75@gmail.com?subject=Arthrex Application Response!">
            <img className="job-img" src={require('../fs-dev.png')} alt="Junior Full Stack Developer" />
          </a>
          <a href="mailto:jmriggs75@gmail.com?subject=Arthrex Application Response!">
            <button className="job-btn">Reach Out to Discuss Opportunity</button>
          </a>
        </div>
        <div className="job">
          <h3 className="job-title">Goal Position - Lead Full Stack Developer</h3>
          <a className="job-a" href="mailto:jmriggs75@gmail.com?subject=Arthrex Application Response!">
            <img className="job-img" src={require('../lead-fs-dev.jpg')} alt="Junior Full Stack Developer" />
          </a>
          <a href="mailto:jmriggs75@gmail.com?subject=Arthrex Application Response!">
            <button className="job-btn">Reach Out to Discuss Opportunity</button>
          </a>
        </div>
      </div>
    );
  }
}

export default Jobs;
