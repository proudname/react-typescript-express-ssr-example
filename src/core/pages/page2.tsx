import { Component } from 'react';
import * as React from 'react';
import { Link } from 'react-router-dom';

export default class Page2 extends Component {
  render(): React.ReactElement<HTMLDivElement> {
    return (
      <div>
        Page2
        <Link to={'/'}>Go to home</Link>
      </div>
    );
  }
}
