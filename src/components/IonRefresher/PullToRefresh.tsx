import React from "react";
import {
  IonContent,
  IonRefresher,
  IonRefresherContent,
  RefresherEventDetail,
} from "@ionic/react";

/* Interface */
interface PullToRefreshProps {
  refreshCallback?: () => void;
  children: React.ReactNode;
}

const PullToRefresh: React.FC<PullToRefreshProps> = ({
  refreshCallback,
  children,
}) => {
  const handleRefresh = (event: CustomEvent<RefresherEventDetail>) => {
    setTimeout(() => {
      if (refreshCallback) {
        refreshCallback();
      }
      event.detail.complete();
    }, 2000);
  };

  return (
    <IonContent className="ion-padding">
      <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
        <IonRefresherContent></IonRefresherContent>
      </IonRefresher>
      {children}
    </IonContent>
  );
};

export default PullToRefresh;
