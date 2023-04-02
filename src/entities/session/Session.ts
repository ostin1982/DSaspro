import { action, computed, makeObservable, observable } from "mobx";

import { GenericUser, User } from "@/entities/session/User";

interface GenericSession {
  isAuthenticated: boolean;
  user: GenericUser | null;
  update(data: GenericUser): void;
  signOut(): void;
}

class Session implements GenericSession {
  private _user: GenericUser | null = null;

  constructor() {
    makeObservable<Session, "_user">(this, {
      _user: observable,
      update: action,
      isAuthenticated: computed,
      signOut: action,
    });
  }

  get isAuthenticated() {
    return this._user !== null;
  }

  get user() {
    return this._user;
  }

  update(data: GenericUser) {
    this._user = new User(data);
  }

  signOut() {
    this._user = null;
  }
}

export const session = new Session();
