import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonLabel, IonMenuButton, IonPage, IonRouterOutlet, IonTitle, IonToolbar } from '@ionic/react';
import { Redirect, Route, useParams } from 'react-router';

import {useState} from "react";
import { ellipse } from 'ionicons/icons';
import DownloadForm from './DownloadForm';


const DownloadIndex: React.FC = () => {

  //const { name } = useParams<{ name: string; }>();
const [name, setName] = useState('DownloadIndex')
  return (
    <>


<IonContent >
      <IonRouterOutlet>
        <Route exact path="/download/form" component={DownloadForm} />
        
  


      </IonRouterOutlet>


      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>





   
      <IonButton href="/download/form">Download Form</IonButton>


      </IonContent>
      </>
  );
};

export default DownloadIndex;


