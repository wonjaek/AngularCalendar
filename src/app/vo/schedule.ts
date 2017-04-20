export class Schedule {
    constructor (
        public id: number,
        public title: string,
        public start_date: Date,
        public end_date: Date,
        public member_no: number) { }
}