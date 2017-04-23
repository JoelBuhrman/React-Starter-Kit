import React from 'react';
import {Link} from 'react-router';


class HomePage extends React.Component {

  constructor(props, context) {
    super(props, context);


  }

  render() {
    return (
      <div id="total">
        WELCOME TO A WORKING STARTER KIT <br/>
        <Link to="/host" activeClassName="active">Host</Link>

      </div>




    );
  }
}

export default HomePage;
