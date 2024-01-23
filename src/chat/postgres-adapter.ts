// postgres-adapter.ts
import { Injectable } from '@nestjs/common';
import { Pool } from 'pg';

@Injectable()
export class PostgresAdapter {
    private pool: Pool;

    constructor() {
        this.pool = new Pool({
            user: 'common',
            host: 'localhost',
            database: 'mucochat',
            password: 'common',
            port: 5432,
        });
    }

    async saveMessage(message: string): Promise<void> {
        const client = await this.pool.connect();
        try {
            await client.query('INSERT INTO messages (message) VALUES ($1)', [message]);
        } finally {
            client.release();
        }
    }

    async getMessages(): Promise<string[]> {
        const client = await this.pool.connect();
        try {
            const result = await client.query('SELECT message FROM messages');
            return result.rows.map(row => row.message);
        } finally {
            client.release();
        }
    }
}
