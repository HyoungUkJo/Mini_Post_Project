import { BaseEntity } from "typeorm";
export declare class Auth extends BaseEntity {
    user_pk: number;
    uid: string;
    password: string;
}
