import { Email, UserId, UserName } from "@/shared/api/rest/auth";

export interface GenericUser {
  id: UserId;
  email: Email;
  name: UserName | null;
}

export class User implements GenericUser {
  private readonly _id: UserId;
  private readonly _email: Email;
  private readonly _name: UserName | null;

  constructor({ id, email, name }: GenericUser) {
    this._id = id;
    this._email = email;
    this._name = name;
  }

  get id() {
    return this._id;
  }

  get email() {
    return this._email;
  }

  get name() {
    return this._name;
  }
}
