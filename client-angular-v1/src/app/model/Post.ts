import { Theme } from './Theme';
import { User } from './User';

export class Post {
  public id: number;
  public title: string;
  public description: string;
  public data: Date;
  public image: string;
  public theme: Theme;
  public user: User;
}
