import{
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonBackButton,
    IonButtons
} from '@ionic/react'

const Details: React.FC = () => {
  return (
    <IonPage>
        <IonHeader>
            <IonToolbar color="tertiary">
                
                <IonButtons>
                <IonBackButton defaultHref='/app/page1' />
                </IonButtons>

                <IonTitle>
                    Page 1 Details
                </IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent  className="ion-padding">
        Page 1 Detail Content
        </IonContent>
    </IonPage>
  );
};

export default Details;