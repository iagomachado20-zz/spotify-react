import React, { CSSProperties } from 'react';
import Sidebar from '../src/components/Sidebar/Sidebar';
import Player from '../src/components/Player/Player';
import Container from '../src/components/Container/Container';

//Router
import { RoutesAplication } from '../src/models/menu.model';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

// Styles
import '../src/assets/styles/global.scss';
import HomePage from './pages/Home/Home';

const listGradients = [
  '#8e5f0b',
  '#584c41',
  '#344565'
];

class App extends React.Component {

  getGradientRandom = () => {

    const randColor = listGradients[Math.floor(Math.random() * listGradients.length)];
    const style: CSSProperties = {
      backgroundImage: `linear-gradient(to right bottom, ${randColor}, rgb(0, 0, 0)), linear-gradient(transparent, rgb(0, 0, 0) 70%)`
    };

    return style;

  };
  
  setColor() {
    return this.getGradientRandom();
  };

  render() { 
    return (
      <Router>
        <div className="theme-dark">
          <div className="appContainer">
            <div className="gradient-box" 
            style={this.setColor()}></div>
            <Sidebar/>
            <Container>
              <div>
                <Switch>
                  { RoutesAplication.map(({ link, component }, index) => 
                      <Route 
                        key={index} 
                        path={link} 
                        component={component}>  
                      </Route> 
                    ) 
                  }
                  <Route exact path="/" component={ HomePage }/>
                </Switch>
              </div>
            </Container>
            <Player/>
          </div>
        </div>
      </Router>  
    )
  }
}

export default App;
