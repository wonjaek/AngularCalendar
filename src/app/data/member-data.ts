import { InMemoryDbService } from 'angular-in-memory-web-api';

export class MemberData implements InMemoryDbService {
    createDb() {
        let members = [
            { no: 1, name: '관리자', id: 'admin@admin.com', password: 'admin' }
        ];
        
        return { members };
    }
}