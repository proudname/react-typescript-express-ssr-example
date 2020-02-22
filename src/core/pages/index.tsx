import { Component } from 'react';
import * as React from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render(): React.ReactElement<HTMLDivElement> {
    return (
      <div>
        Home page
        <Link to={'/page2'}>Go to page2</Link>
      </div>
    );
  }
}
