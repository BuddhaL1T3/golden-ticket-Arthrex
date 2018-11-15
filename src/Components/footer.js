import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

library.add(faLinkedin, faEnvelope, faGithub, faFilePdf);

class Footer extends Component {
  render() {
    return (
      <footer className="footer" role="contentinfo">
        <h2 id="footer">Get In Touch:</h2>
        <section className="contact-info">
          <div className="contact-info-left">
            <a className="icon" href="mailto:jmriggs75@gmail.com">
              <FontAwesomeIcon icon="envelope" size="2x" />
            </a>
            <a className="icon" target="_blank" rel="noopener noreferrer" href="https://github.com/BuddhaL1T3">
              <FontAwesomeIcon icon={['fab', 'github']} size="2x" />
            </a>
          </div>
          <div className="contact-info-right">
            <a
              className="icon"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/jonathan-riggs-34898476/"
            >
              <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" />
            </a>
            <a
              className="icon"
              target="_blank"
              rel="noopener noreferrer"
              href="https://drive.google.com/file/d/1v47vkAcnYCNe2MI39fx6ueRPm5iBO920/view?usp=sharing"
            >
              <FontAwesomeIcon icon="file-pdf" size="2x" />
            </a>
          </div>
        </section>
      </footer>
    );
  }
}

export default Footer;
