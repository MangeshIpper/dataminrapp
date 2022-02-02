export interface BaseUser {
  name: string;
  address: string;
  age: string;
  profession: string;
}
export interface User extends BaseUser {
  id: number;
}