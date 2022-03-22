import './App.css';
import Column from './Column';
import logo from "./img.png";
function App() {
  return (
    <div className="App">
      <div className="headercom">
        <img style={{ float: 'left' }} src={logo} alt="profilePic" />
        <br />
        <h1>John Doe</h1>
      </div>
      <br />
      <Column title="Summary" content="About me: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa temporibus animi molestias soluta alias iusto ipsam"></Column>
      <Column title="Experience" content="Worked at: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa temporibus animi molestias soluta alias iusto ipsam"></Column>
      <Column title="Contact" content="Reach me at: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa temporibus animi molestias soluta alias iusto ipsam"></Column>
    </div>
  );
}

export default App;
