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
    phoneNumber: string;
    isReceivePromotion: boolean;

    roles: string[];
    supplierId?: number;
}
