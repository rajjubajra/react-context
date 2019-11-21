import React, { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext';

class ToogleTheme extends Component {

  static contextType = ThemeContext;

  render() {
    //consume toogleTheme function from ThemeConttext file
    const { toogleTheme } = this.context;

    return (
      <div>
        <button className="btn" onClick={toogleTheme}>Toogle Theme</button>
      </div>
    )
  }
}

export default ToogleTheme;
