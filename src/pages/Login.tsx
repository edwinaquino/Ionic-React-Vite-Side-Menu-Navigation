import{
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    useIonRouter
} from '@ionic/react'

const Login: React.FC = () => {
    const navigation = useIonRouter();
    const dologin =() =>{
        navigation.push('/app','forward', 'replace')
    }
  return (
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonTitle>
                    My Cool Page
                </IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent  className="ion-padding">
        <IonButton onClick={() => dologin()} expand="full">Login</IonButton>
        </IonContent>
    </IonPage>
  );
};

export default Login;