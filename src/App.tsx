import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
// import Menu from './components/menu/Menu';
import Page from './pages/Page';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import DownloadIndex from './pages/download/DownloadIndex'
import Login from './pages/Login';
import Menu from './pages/Menu';
setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        {/* <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main"> */}

            {/* <Route exact path="/download"  component={DownloadIndex}>
              <DownloadIndex />
            </Route> */}
          <Route exact path="/" component={Login} />
          {/* <Route exact path="/app" component={Menu} /> */}
          
          
          <Route path="/app" component={Menu} />
        {/* <Redirect exact from="/" to="/app" /> */}

          {/* </IonRouterOutlet>
        </IonSplitPane> */}
      </IonReactRouter>

    </IonApp>
  );
};

export default App;
