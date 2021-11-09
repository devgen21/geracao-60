import { Token } from '@angular/compiler/src/ml_parser/tokens';

export class UserLogin {
  public id: number;
  public username: string;
  public password: string;
  public email: string;
  public token: Token;
}
