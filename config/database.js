const path = require('path');
const knex = require('knex');

const dbPath = path.resolve(__dirname, '../data/chatbot.db'); // Ensure this resolves correctly
console.log('Database path:', dbPath); // Debugging log

const db = knex({
  client: 'sqlite3',
  connection: {
    filename: dbPath,
  },
  useNullAsDefault: true,
});

const initializeDatabase = async () => {
  try {
    if (!(await db.schema.hasTable('sessions'))) {
      await db.schema.createTable('sessions', (table) => {
        table.increments('id').primary();
        table.string('user_id');
        table.text('data');
        table.timestamps(true, true);
      });
    }

    if (!(await db.schema.hasTable('messages'))) {
      await db.schema.createTable('messages', (table) => {
        table.increments('id').primary();
        table.string('session_id');
        table.text('content');
        table.timestamps(true, true);
      });
    }

    console.log('Database initialized');
  } catch (err) {
    console.error('Error initializing database:', err);
    throw err;
  }
};

module.exports = { db, initializeDatabase };
