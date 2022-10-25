/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { IonApp, setupIonicReact } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import React, { useEffect, useState } from 'react'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/display.css'

/* Theme variables */
import './theme/variables.css'
import { GlobalStyle } from './global.style'
import { Tabs } from './tabs/Tabs'
import firebase from 'firebase'
import { UserContext } from './User.context'
import { AuthService } from './services/auth.service'
import { environment } from './environment/environment'

setupIonicReact()

firebase.initializeApp(environment.firebase)

const App: React.FC = () => {
  const [user, setUser] = useState<firebase.User | null>(null)

  useEffect(() => {
    const authService = new AuthService()

    firebase.auth().onAuthStateChanged(async (user) => {
      if (authService.isSignUp) {
        authService.setAuthStateLogged(false)
        return
      }

      if (user) {
        const token = await user.getIdToken()
        authService.setTokenInLocalStorage(token)
        authService.setAuthStateLogged(true)
      }

      authService.setAuthStateLogged(false)
    })

    firebase.auth().onIdTokenChanged(async (user) => {
      if (user) {
        const token = await user.getIdToken()
        return authService.setTokenInLocalStorage(token)
      }
    })
  }, [])

  return (
        <IonApp>
            <GlobalStyle />
            <IonReactRouter>
                <UserContext.Provider value={{ user, setUser }}>
                    <Tabs />
                </UserContext.Provider>
            </IonReactRouter>
        </IonApp>
  )
}

export default App
