import { int, mysqlTable, varchar, timestamp } from 'drizzle-orm/mysql-core';
import {relations} from 'drizzle-orm';

export const usersTable = mysqlTable('users_table', {
  id: int('id').primaryKey().autoincrement(),
  name: varchar('name', { length: 255 }).notNull(),
  age: int('age').notNull(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  createdAt: timestamp('created_at').defaultNow(),
});

export const bookshelvesTable = mysqlTable('bookshelves_table', {
    id: int('id').primaryKey().autoincrement(),
    userId: int('user_id').references( () => usersTable.id),
    name: varchar('name', { length: 255}).notNull(),
    createdAt: timestamp('created_at').defaultNow(),
})

export const booksTable = mysqlTable('books_table', {
    id: int('id').primaryKey().autoincrement(),
    googleBooksId: varchar('google_books_id', {length: 255}).notNull(),
})

export const bookshelvesToBooksTable = mysqlTable('bookshelves_to_books_table', {
  id: int('id').primaryKey().autoincrement(),
  bookshelfId: int('bookshelf_id').references(() => bookshelvesTable.id),
  bookId: int('book_id').references(() => booksTable.id),
  addedAt: timestamp('added_at').defaultNow(),
});

export const usersRelations = relations(usersTable, ({ many }) => ({
  bookshelves: many(bookshelvesTable),
}));

// each bookshelf belongs to one user, each bookshelf can have many books
export const bookshelvesRelations = relations(bookshelvesTable, ({ one, many }) => ({
  user: one(usersTable, {
    fields: [bookshelvesTable.userId],
    references: [usersTable.id],
  }),
  bookshelfBooks: many(bookshelvesToBooksTable),
}));

// each book can belong to many bookshelves
export const booksRelations = relations(booksTable, ({ many }) => ({
  bookshelfBooks: many(bookshelvesToBooksTable),
}));

// each record connects one bookshelf to one book
export const bookshelfBooksRelations = relations(bookshelvesToBooksTable, ({ one }) => ({
  bookshelf: one(bookshelvesTable, {
    fields: [bookshelvesToBooksTable.bookshelfId],
    references: [bookshelvesTable.id],
  }),
  book: one(booksTable, {
    fields: [bookshelvesToBooksTable.bookId],
    references: [booksTable.id],
  }),
}));

