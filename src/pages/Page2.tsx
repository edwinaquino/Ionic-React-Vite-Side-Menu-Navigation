import{
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonMenuButton
} from '@ionic/react'

const Page2: React.FC = () => {
  return (
    <IonPage>
        <IonHeader>
            <IonToolbar color="warning">
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
                <IonTitle>
                    Page2 Title
                </IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent  className="ion-padding">
        Page2 Content
        </IonContent>
    </IonPage>
  );
};

export default Page2;