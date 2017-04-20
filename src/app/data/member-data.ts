import { InMemoryDbService } from 'angular-in-memory-web-api';

export class MemberData implements InMemoryDbService {
    createDb() {
        let members = [
            { id: 1, name: '관리자', email: 'admin@admin.com', password: 'admin' },
            { id: 2, name: '한대호', email: 'supreme2705@gmail.com', password: 'handaeho1' },
        ];
        return { members };
    }
}