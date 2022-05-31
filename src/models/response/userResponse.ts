import { IUser } from "../user.types";

type TLinks = {
    next_url: null | string;
    prev_url: null | string;
  };
  
  export interface IUsersResponse {
    count: number;
    links: TLinks;
    page: number;
    success: boolean;
    total_pages: number;
    total_users: number;
    users: IUser[]; 
  }