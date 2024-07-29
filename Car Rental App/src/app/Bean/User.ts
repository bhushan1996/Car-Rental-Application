export class User {
    fullName: string;
    userId: number;
    email: string;
    phone: string;
    frontLicenseImageUrl: File;
    backLicenseImageUrl: File;
    password: string;

    constructor(userId){
        this.userId =userId;
    }

}