/*
 * member.model.ts
 */

export class Member {
    firstName: string;
    lastName: string;
    username: string;
    userId?: string;

    constructor(firstName: string, lastName: string, username: string, userId?: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.userId = userId;
    }
}
