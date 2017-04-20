import { InMemoryDbService } from 'angular-in-memory-web-api';

export class ScheduleData implements InMemoryDbService {
    createDb() {
        let schedules = [
            { id: 1, title: '1.test schedule', start_date: '2017-04-15', end_date: '2017-04-25', member_no: 2},
            { id: 2, title: '2.test schedule', start_date: '2017-04-01', end_date: '2017-04-14', member_no: 2},
            { id: 3, title: '3.test schedule', start_date: '2017-04-10', end_date: '2017-04-17', member_no: 2},
            { id: 4, title: '4.test schedule', start_date: '2017-04-25', end_date: '2017-05-10', member_no: 2}
        ];

        return { schedules };
    }
}