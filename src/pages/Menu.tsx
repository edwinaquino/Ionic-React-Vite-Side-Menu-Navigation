import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonSplitPane,
  IonMenu,
  IonRouterOutlet,
  IonMenuToggle,
  IonItem,
  IonList,
  IonIcon,
  IonLabel,
  IonListHeader,
  IonNote,
  IonButton,
  IonMenuButton,
} from "@ionic/react";
import {
  homeOutline,
  newspaperOutline,
  logOutOutline,
  archiveOutline,
  archiveSharp,
  cloudDownloadOutline,
  cloudUploadOutline,
  heartOutline,
  heartSharp,
  trashOutline,
  trashSharp,
  warningOutline,
  warningSharp,
} from "ionicons/icons";
import { Redirect, Route } from "react-router";
import Details from "./Details";
import Page1 from "./Page1";
import Page2 from "./Page2";
// ALL CONTENT IDs MUST MATCH
const Menu: React.FC = () => {
  const paths = [
    { name: "Home", url: "/app/page1", icon: homeOutline },
    { name: "News", url: "/app/page2", icon: newspaperOutline },
  ];

  return (
    <IonSplitPane contentId="main">
      <IonMenu contentId="main"   type="overlay">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
        {paths.map((item, index) => (
          <IonMenuToggle key={index} autoHide={false}>
            <IonItem routerLink={item.url} routerDirection="none">
               <IonIcon icon={item.icon} slot="start"></IonIcon> 
              {item.name}
            </IonItem>
          </IonMenuToggle>
        ))}
        <IonButton routerLink="/" routerDirection="back" expand="full">
            <IonIcon icon={logOutOutline} slot="start"></IonIcon>
            Logout
        </IonButton>
      </IonContent>
      </IonMenu>



      <IonRouterOutlet id="main">
      <Route exact path="/app/page1" component={Page1} />
      <Route exact path="/app/page1/details" component={Details} />

      <Route exact path="/app/page2" component={Page2} />
      <Route exact path="/app">
      <Redirect to="/app/page1" />
    </Route>
      </IonRouterOutlet>
    </IonSplitPane>
  );
};

export default Menu;
