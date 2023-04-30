import crypto from 'node:crypto';

export interface UserProps {
  id: string;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

export class User {
  protected props: UserProps;

  constructor({
    name,
    email,
    password,
  }: Pick<UserProps, 'name' | 'email' | 'password'>) {
    this.props = {
      id: crypto.randomUUID(),
      name,
      email,
      password,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  }

  public update(): void {
    this.props.updatedAt = new Date();
  }

  public get id(): string {
    return this.props.id;
  }

  public get name(): string {
    return this.props.name;
  }

  public set name(name: string) {
    this.props.name = name;
  }

  public get email(): string {
    return this.props.email;
  }

  public set email(email: string) {
    this.props.email = email;
  }

  public get password(): string {
    return this.props.password;
  }

  public set password(password: string) {
    this.props.password = password;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }

  public get updatedAt(): Date {
    return this.props.updatedAt;
  }
}
