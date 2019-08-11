export interface IMember {
    id?: number,
    firstname: string,
    lastname: string,
    password: string,
    username: string,
    createdDate?: Date
}

export class RegisterModel implements IMember {
    id: number;
    confirm: boolean;
    firstname: string;
    lastname: string;
    password: string;
    username: string;
}

export class LoginModel implements IMember {
    id: number;
    confirm: boolean;
    firstname: string;
    lastname: string;
    password: string;
    username: string;
}