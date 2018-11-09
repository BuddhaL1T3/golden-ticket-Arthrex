import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

library.add(faLinkedin, faEnvelope, faGithub, faFilePdf);

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div>Logo</div>
        <div>Tab 1</div>
        <div>Tab 2</div>
        <div>Tab 3</div>
        <div>Tab 4</div>
        <a href="mailto:jmriggs75@gmail.com">
          <FontAwesomeIcon icon="envelope" size="1x" />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/BuddhaL1T3">
          <FontAwesomeIcon icon={['fab', 'github']} size="1x" />
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jonathan-riggs-34898476/">
          <FontAwesomeIcon icon={['fab', 'linkedin']} size="1x" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://drive.google.com/file/d/1v47vkAcnYCNe2MI39fx6ueRPm5iBO920/view?usp=sharing"
        >
          <FontAwesomeIcon icon="file-pdf" size="1x" />
        </a>
      </div>
    );
  }
}

export default Header;
