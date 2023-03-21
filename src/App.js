import  {Component}  from 'react';
import './App.css';
import  Profile  from './components/profile';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isVisible: false
    }
  }

  toggleVisibilty = () => {
    this.setState({isVisible: !this.state.isVisible})
    console.log(this.state.isVisible);
  }
  render() {
  return (
    <div className="App">
      <h1>Profile</h1>
      <button onClick={this.toggleVisibilty}>
        {this.state.isVisible ? "Hide profile" : "Show profile"}
      </button>
      {this.state.isVisible && <Profile />}
    </div>
  );
  }
}

export default App;