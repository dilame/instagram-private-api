export interface UserRepositoryWebProfileInfoResponseRootObject {
  data: UserRepositoryWebProfileInfoResponseData;
  status: string;
}

export interface UserRepositoryWebProfileInfoResponseData {
  user: UserRepositoryWebProfileInfoResponseUser;
}

export interface UserRepositoryWebProfileInfoResponseUser {
  biography: string;
}
