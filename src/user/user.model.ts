// user.model.ts
export interface User {
    id: number;
    vorname: string;
    nachname: string;
    username: string;
    password: string;
    enddatum: string;
    isAdmin: boolean;
    loggedIn?: boolean;
  }
  