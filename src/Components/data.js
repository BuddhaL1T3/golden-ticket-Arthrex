import React, { Component } from 'react';

import Jobs from './jobs';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake, faHeart, faBookOpen, faSeedling } from '@fortawesome/free-solid-svg-icons';

library.add(faHandshake, faHeart, faBookOpen, faSeedling);

class Data extends Component {
  render() {
    return (
      <section className="main">
        <Jobs />
        <div className="main-info">
          <h1 className="main-title">Full Stack Web Developer in Florida</h1>
          <img className="jr-pic" src={require('../Profile.jpg')} alt="Jonathan Riggs headshot" />
          <p>
            Hi Arthrex! My name is Jonathan Riggs and I'm looking for an opportunity to apply my skills, continue
            learning, and contribute in a meaningful way to clients, my community, and a company I believe in. You may
            have already figured it out, but I'm interested in doing so with you!
          </p>
          <h3>Why Arthrex?</h3>
          <p>
            Arthrex is a leader in innovation. Hands down one of the biggest attention-getters. For this reason, Arthrex
            seems like a wonderful place to continue my career as a developer. Aside from innovation, I am impressed by
            the exceptional quality of work produced by Arthrex – not just from clean apps and polished websites, but
            from ALL aspects of the company. From community involvement though Arthrex Foundation, to your belief in
            continuous education for both surgeons and your own staff. Not to mention, you have been recognized many
            times by Best Companies to Work For(R) for your exceptional benefits and extraordinary culture. Putting my
            skills to work is only one piece of the pie. I am looking for a great culture fit as well as a great family
            oriented company. After doing some research and speaking with several of your current employees it is more
            than apparent that Arthrex is exactly the company I would love to grow with.
          </p>
          <p>
            I know the importance of what Arthrex does because, in my previous employment in a Continued Care Retirement
            Community, I have seen time and time again the impact Arthrex has had on the lives of so many. You really do
            Help Surgeons Treat Their Patients Better(TM). Secondly, as a recent graduate of Thinkful's full time
            Engineering Immersion program, I've acquired working experience through planning, designing and executing
            full stack apps and turning thoughts into tangable working applications! This experience was gained by
            building front end web clients with JavaScript, HTML, CSS, and React/Redux. As well as by running web
            servers and writing RESTFUL APIs on the back end using Node.js/Express, and integrating both relational and
            non-relational databases using MongoDB, and PostgreSQL respectively. I have the soft skills, the team
            oriented mindset, and the drive to be part of a synergistic outcome. I would love to combine both my full
            stack skills as well as the desire to join the team that has affected the lives of so many that have meant
            so much to me.
          </p>
          <h3>But Jonathan, we're looking for LEAD Full Stack developer!</h3>
          <p>
            I see that you are currently hiring for a LEAD Full Stack developer, and although my current experience
            within the tech industry is fresh, I still believe that I can be a great addition to your team. I have
            leadership experience. I have a great ability to learn and retain new systems, frameworks, and languages
            extremely well. I've already built several web applications, and expanding my skill set and putting them to
            use is just the next step. I have full confidence that I can productively join the Arthrex Development team
            and effectively learn from peers. Regardless of how Arthrex's development team(s) is(are) comprised, I know
            that I can be plopped into almost any environment, adapt and thrive. I am open to any challenge and hope
            that you are open to taking a chance on an eager and thirsty new developer.
          </p>

          <h3>My Benefits</h3>
          <p>
            I'm extremely interested in a developer position with Arthrex, but I know that it's as much about you as it
            is about me. I believe I can provide benefits as an asset to the Arthrex team, but I'd also like to
            emphasize my interest in the right fit. Here's why I think Arthrex might be a great fit:
          </p>
          <div className="benefits">
            <div className="benefit">
              <h4 className="seedling">
                <FontAwesomeIcon icon="seedling" /> Focused on growth
              </h4>
              <p>
                Arthrex's investment in learning, creating, and contributing for both self-improvement and the
                betterment of company/community speaks to me. I'm just as oriented towards self-development as I am
                towards career development and any opportunity to marry both growth paths in a work environment is
                always welcome.
              </p>
            </div>
            <div className="benefit">
              <h4 className="book-open">
                <FontAwesomeIcon icon="book-open" /> Always Learning
              </h4>
              <p>
                My interest in development is rooted in an almost compulsive need to continue learning new ways to work
                with and build web technologies/software. I believe that a developer's ability to stay learning and
                flexible with new technologies allows them to better serve their cause, and Arthrex's willingness to
                support continued education and job-related training for team members seems to reflect my values.
              </p>
            </div>
            <div className="benefit">
              <h4 className="handshake">
                <FontAwesomeIcon icon="handshake" /> Looking for a team
              </h4>

              <p>
                As I continue my career in web development, I seek out a healthy ecosystem of experienced developers to
                learn from and collaborate with. My most memorable accomplishments as a developer to date have involved
                extensive collaboration. Arthrex seems very well organized in both its internal practices and project
                management, and I believe that I would benefit from Arthrex's quality while contributing to its culture.
              </p>
            </div>
            <div className="benefit">
              <h4 className="heart">
                <FontAwesomeIcon icon="heart" /> Well-being in mind
              </h4>
              <p>
                I want to grow as both a developer and an individual, and I'm seeking a solid organization to do that
                with. The most important goal for me is to find a position in a supportive, growth-oriented environment
                that will allow me to develop great products – conditions that I believe will foster my well-being as
                both a developer and a human being. From what I can see, Arthrex ticks the boxes.
              </p>
            </div>
          </div>
          <a href="mailto:jmriggs75@gmail.com?subject=Arthrex Application Response!">
            <button className="job-btn">Reach Out to Discuss Opportunity</button>
          </a>
          <p className="outro-bit">
            My impression is that Arthrex produces high quality products, has sound product development principles, and
            promotes a growth-oriented work culture that accommodates its team members' needs as people. Of course, I'd
            love to have an opportunity to learn more about Arthrex firsthand! So please, don't hesitate to reach out if
            I seem like I might be a good fit!
          </p>
        </div>
      </section>
    );
  }
}

export default Data;
