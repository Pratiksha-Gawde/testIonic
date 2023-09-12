import {
  IonContent,
  IonPage,
  IonGrid,
  IonButton,
  IonCol,
  IonRow,
  IonIcon,
  IonText
} from "@ionic/react";
import React from "react";
import { logoIonic } from 'ionicons/icons';

const Home: React.FC = () => {



  return (
    <IonPage>
      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow>
            <IonCol className="ion-text-center">
              <IonButton className="ion-text-wrap" size="large">
                <IonText className="ion-text"><h2>Counts</h2></IonText>
              </IonButton>
            </IonCol>
            <IonCol className="ion-text-center">
              <IonButton className="ion-text-wrap" size="large" >
                <IonText className="ion-text"><h2>GLH</h2></IonText>
                </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonGrid>
          <IonRow>
            <IonCol className="ion-text-center">
              <IonButton className="ion-text-wrap" size="large"  >
                  <IonText className="ion-text"><h2>Stock <br /> Information</h2></IonText>
              </IonButton>
            </IonCol>
            <IonCol className="ion-text-center">
              <IonButton className="ion-text-wrap" size="large">
                <IonText className="ion-text"><h2>Stock <br /> Adjustment</h2></IonText>
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
