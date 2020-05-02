import React, { Component } from 'react';
import { render } from 'react-dom';
import News from './News';

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: 'React'
//     };
//   }

//   render() {
//     return (
//       <div>
//         <News name={this.state.name} />
//       </div>
//     );
//   }
// }

render(<News />, document.getElementById('root'));
