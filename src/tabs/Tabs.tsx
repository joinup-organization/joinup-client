/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react'
import { clipboardOutline, homeOutline, mailOutline, personCircleOutline } from 'ionicons/icons'
import React, { useContext } from 'react'
import { Route } from 'react-router'
import AccountPage from '../pages/Account/Account.page'
import AnswerPage from '../pages/Answer/Answer.page'
import { Answers } from '../pages/Answers/Answers.page'
import AppliedProjects from '../pages/Applied Projects/AppliedProjects.page'
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
                <Route exact path="/answer/:id" component={AnswerPage} />
                <Route exact path="/login" component={LoginPage} />
                <Route exact path="/answers" component={Answers} />
                <Route exact path="/applied-projects" component={AppliedProjects} />
                <Route exact path="/account" component={AccountPage} />
            </IonRouterOutlet>
            {user
              ? <IonTabBar slot="bottom">
                <IonTabButton tab="tab1" href="/home">
                    <IonIcon icon={homeOutline} />
                    <IonLabel>Início</IonLabel>
                </IonTabButton>
                <IonTabButton tab="tab2" href="/applied-projects">
                    <IonIcon icon={clipboardOutline} />
                    <IonLabel>Projetos aplicados</IonLabel>
                </IonTabButton>
                <IonTabButton tab="tab3" href="/answers">
                    <IonIcon icon={mailOutline} />
                    <IonLabel>Respostas</IonLabel>
                </IonTabButton>
                <IonTabButton tab="tab4" href="/account">
                    <IonIcon icon={personCircleOutline} />
                    <IonLabel>Minha conta</IonLabel>
                </IonTabButton>
            </IonTabBar>
              : <IonTabBar></IonTabBar>}
        </IonTabs>
  )
}
