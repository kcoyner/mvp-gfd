export class User {
    constructor (
        public email: string,
        public password: string,
        public firstName?: string,
        public lastname?: string
    ) {}
}
