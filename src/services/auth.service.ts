/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { IUserLogin } from '../model/user.model'
import firebase from 'firebase'
import { set } from './storage.service'
import { BehaviorSubject } from 'rxjs'

export class AuthService {
  public readonly auth = firebase.auth()
  private authStateLogged: boolean | null = null
  public authStateSubject = new BehaviorSubject<boolean | null>(this.authStateLogged)

  public readonly login = async ({ email, password }: IUserLogin) => {
    const userCredential = await this.auth.signInWithEmailAndPassword(email, password)
    const token = await userCredential.user?.getIdToken()

    if (!token) {
      throw new Error('Ocorreu um erro inesperado')
    }

    set('token', token)
  }

  public getCurrentUser = this.auth.currentUser

  public isSignUp = false

  public setAuthStateLogged = (state: boolean) => {
    this.authStateLogged = state
    this.authStateSubject.next(this.authStateLogged)
  }

  public setTokenInLocalStorage = (token: string) => set('token', token)
}
