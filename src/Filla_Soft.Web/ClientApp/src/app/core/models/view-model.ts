export class LoginModel {
    email: string;
    password: string;
}

export class User {
    id: string;
    fullName: string;
    email: string;
    birthDay: Date;
    gender: number;
    genderName: string;
    roles: string[];
}
