import {
  IonContent,
  IonPage,
  IonGrid,
  IonButton,
  IonCol,
  IonRow,
  IonText
} from "@ionic/react";
import React from "react";
const Home: React.FC = () => {


  return (
    <IonPage>
      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow>
            <IonCol className="ion-text-center">
              <IonButton className="ion-text-wrap" size="large">
                <IonText className="ion-text"><h6>Counts</h6></IonText>
              </IonButton>
            </IonCol>
            <IonCol className="ion-text-center">
              <IonButton className="ion-text-wrap" size="large" >
                <IonText className="ion-text"><h6>GLH</h6></IonText>
                </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonGrid>
          <IonRow>
            <IonCol className="ion-text-center">
              <IonButton className="ion-text-wrap" size="large"  >
                  <IonText className="ion-text"><h6>Stock <br /> Information</h6></IonText>
              </IonButton>
            </IonCol>
            <IonCol className="ion-text-center">
              <IonButton className="ion-text-wrap" size="large">
                <IonText className="ion-text"><h6>Stock <br /> Adjustment</h6></IonText>
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
