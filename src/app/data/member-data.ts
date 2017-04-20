import { InMemoryDbService } from 'angular-in-memory-web-api';

export class MemberData implements InMemoryDbService {
    createDb() {
        let members = [
            { no: 1, name: '관리자', id: 'admin@admin.com', password: 'admin' },
            { no: 2, name: '한대호', id: 'supreme2705@gmail.com', password: 'handaeho1' },
        ];
        
        return { members };
    }
}