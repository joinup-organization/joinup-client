/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react'
import { clipboardOutline, homeOutline, mailOutline, personCircleOutline } from 'ionicons/icons'
import React, { useContext } from 'react'
import { Route } from 'react-router'
import { Answers } from '../pages/Answers/Answers.page'
import Home from '../pages/Home/Home.page'
import { LoginPage } from '../pages/Login/Login.page'
import ProjectPage from '../pages/Project/Project.page'
import { UserContext } from '../User.context'

export const Tabs: React.FC = () => {
  const { user } = useContext(UserContext)
  return (
        <IonTabs>
            <IonRouterOutlet>
                <Route exact path="/" component={user ? Home : LoginPage} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/project/:id" component={ProjectPage} />
                <Route exact path="/login" component={LoginPage} />
                <Route exact path="/answers" component={Answers} />
            </IonRouterOutlet>
            {user
              ? <IonTabBar slot="bottom">
                <IonTabButton tab="tab1" href="/home">
                    <IonIcon icon={homeOutline} />
                    <IonLabel>Início</IonLabel>
                </IonTabButton>
                <IonTabButton tab="tab2" href="/tab2">
                    <IonIcon icon={clipboardOutline} />
                    <IonLabel>Projetos aplicados</IonLabel>
                </IonTabButton>
                <IonTabButton tab="tab3" href="/answers">
                    <IonIcon icon={mailOutline} />
                    <IonLabel>Respostas</IonLabel>
                </IonTabButton>
                <IonTabButton tab="tab4" href="/tab4">
                    <IonIcon icon={personCircleOutline} />
                    <IonLabel>Minha conta</IonLabel>
                </IonTabButton>
            </IonTabBar>
              : <IonTabBar></IonTabBar>}
        </IonTabs>
  )
}
