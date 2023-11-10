import './App.css';
import NavWithLogin from './utility/navigation.without.login.component';
import LandingPageHeader from './landingpage/header.landingpage.component';

function App() {
  return (
    <div className="App">
      <NavWithLogin/>
      <LandingPageHeader/>
    </div>
  );
}

export default App;
