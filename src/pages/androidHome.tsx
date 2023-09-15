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

const AndroidHome: React.FC = () => {

  const openCountsApp = async () => {

    countsApp.start(
      function () { /* success */
        console.log("Counts App started!");
      },
      function (error: any) { /* fail */
        alert(error);
      }
    );
  };

  const openGlhApp = async () => {

    glhApp.start(
      function () { /* success */
        console.log("GLH App started!");
      },
      function (error: any) { /* fail */
        alert(error);
      }
    );
  };

  const openstockInfoApp = async () => {

    stockInformationApp.start(
      function () { /* success */
        console.log("Stock Information App started!");
      },
      function (error: any) { /* fail */
        alert(error);
      }
    );
  };

  const openstockAdjustmentApp = async () => {

    stockAdjustmentApp.start(
      function () { /* success */
        console.log("Stock Adjustment App started!");
      },
      function (error: any) { /* fail */
        alert(error);
      }
    );
  };

  var countsApp = (window as any).startApp.set({
    "package": "com.morrisons.instore",
    "action": "ACTION_MAIN",
    "category": "CATEGORY_DEFAULT",
    "flags": ["FLAG_ACTIVITY_CLEAR_TOP", "FLAG_ACTIVITY_CLEAR_TASK"],
    "component": ["com.morrisons.instore.sit", "com.morrisons.instore.modules.scheduledcounts.home.ScheduledCountsHomeActivity"],
    "intentstart": "startActivity"
  });

  var glhApp = (window as any).startApp.set({
    "package": "com.morrisons.instore",
    "action": "ACTION_MAIN",
    "category": "CATEGORY_DEFAULT",
    "flags": ["FLAG_ACTIVITY_CLEAR_TOP", "FLAG_ACTIVITY_CLEAR_TASK"],
    "component": ["com.morrisons.instore.sit", "com.morrisons.instore.modules.storewalk.menu.StoreWalkMenuActivity"],
    "intentstart": "startActivity",
  });

  var stockInformationApp = (window as any).startApp.set({
    "package": "com.morrisons.instore",
    "action": "ACTION_MAIN",
    "category": "CATEGORY_DEFAULT",
    "flags": ["FLAG_ACTIVITY_CLEAR_TOP", "FLAG_ACTIVITY_CLEAR_TASK"],
    "component": ["com.morrisons.instore.sit", "com.morrisons.instore.modules.stockinformation.stockinfoscan.StockInfoScanActivity"],
    "intentstart": "startActivity"
  });

  var stockAdjustmentApp = (window as any).startApp.set({
    "package": "com.morrisons.instore",
    "action": "ACTION_MAIN",
    "category": "CATEGORY_DEFAULT",
    "flags": ["FLAG_ACTIVITY_CLEAR_TOP", "FLAG_ACTIVITY_CLEAR_TASK"],
    "component": ["com.morrisons.instore.sit", "com.morrisons.instore.modules.stockoperations.stockadjustments.adjustmenttypeselection.AdjustmentTypeSelectionActivity"],
    "intentstart": "startActivity"
  });

  return (
    <IonPage>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol className="ion-text-center" class="md">
              <IonButton className="ion-text-wrap" size="large" onClick={() => openCountsApp()}>
                <IonText className="ion-text"><h6>Counts</h6></IonText>
              </IonButton>
            </IonCol>
            <IonCol className="ion-text-center">
              <IonButton className="ion-text-wrap" size="large" onClick={() => openGlhApp()}>
                <IonText className="ion-text"><h6>GLH</h6></IonText>
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="ion-text-center">
              <IonButton className="ion-text-wrap" size="large" onClick={() => openstockInfoApp()}>
                <IonText className="ion-text"><h6>Stock <br /> Information</h6></IonText>
              </IonButton>
            </IonCol>
            <IonCol className="ion-text-center">
              <IonButton className="ion-text-wrap" size="large" onClick={() => openstockAdjustmentApp()}>
                <IonText className="ion-text"><h6>Stock <br /> Adjustment</h6></IonText></IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default AndroidHome;
