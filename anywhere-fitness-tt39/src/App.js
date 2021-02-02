import './App.css';
import SignUpForm from './components/SignUpForm'
import LoginForm from './components/LoginForm'

function App() {
  
  return (
    <div className="App">
      <h1>Anywhere Fitness</h1>
      <SignUpForm/>
      <br/>
      <LoginForm/>
    </div>
  );
}

export default App;
