import React, { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext';



class BookList extends Component {
  
  static contextType = ThemeContext;


  render() {
    console.log(this.context);
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;

    return (
      <div className="card">
        <div className="card-content">
        <ul className="collection" >
          <li className="collection-item" style={{background: theme.ui, color: theme.syntax}}>The way of king</li>
          <li className="collection-item" style={{background: theme.ui, color: theme.syntax}}>The name of the wind</li>
          <li className="collection-item" style={{background: theme.ui, color: theme.syntax}}>The final empire</li>
        </ul>
        </div>
      </div>
    )
  }
}

export default BookList;