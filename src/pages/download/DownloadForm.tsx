import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react";

import {useState} from "react";
const DownloadForm: React.FC = () => {
    const [name, setName] = useState('DownloadForm')
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
      DownloadForm<br/>
      DownloadForm<br/>
      DownloadForm<br/>
      DownloadForm<br/>
      DownloadForm<br/>
      DownloadForm<br/>
      DownloadForm<br/>
      </IonContent>
    </IonPage>
  );
};

export default DownloadForm;