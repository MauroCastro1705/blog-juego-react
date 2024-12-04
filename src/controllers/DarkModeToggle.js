import React, { Component } from "react";
import "../Styles/App.scss";
import "../Styles/partials/footer.scss";
import "../Styles/partials/home.scss";
import "../Styles/partials/nav.scss";

class DarkModeToggle extends Component {
  constructor(props) {
    super(props);
    
    // Check and apply dark mode on initial load
    const isDarkMode = JSON.parse(localStorage.getItem("DARK_MODE")) === true;
    if (isDarkMode) {
      this.applyDarkMode();
    }

    this.state = {
      darkMode: isDarkMode,
    };

    this.handleModeChange = this.handleModeChange.bind(this);
  }

  applyDarkMode() {
    // Add dark mode to specific elements
    document.body.classList.add("dark-mode");
    
    // Select and add dark mode to nav, footer, and home
    const elementsToToggle = [
      document.querySelector('nav'),
      document.querySelector('footer'),
      document.querySelector('.home')
    ];

    elementsToToggle.forEach(element => {
      if (element) {
        element.classList.add("dark-mode");
      }
    });
  }

  removeDarkMode() {
    // Remove dark mode from specific elements
    document.body.classList.remove("dark-mode");
    
    const elementsToToggle = [
      document.querySelector('nav'),
      document.querySelector('footer'),
      document.querySelector('.home')
    ];

    elementsToToggle.forEach(element => {
      if (element) {
        element.classList.remove("dark-mode");
      }
    });
  }

  handleModeChange() {
    if (!this.state.darkMode) {
      this.applyDarkMode();
    } else {
      this.removeDarkMode();
    }

    this.setState({
      darkMode: !this.state.darkMode,
    });
    
    localStorage.setItem("DARK_MODE", !this.state.darkMode);
  }

  render() {
    return <button onClick={this.handleModeChange}>Change Mode</button>;
  }
}

export default DarkModeToggle;