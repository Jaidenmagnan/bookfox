CREATE TABLE `books_table` (
	`id` int AUTO_INCREMENT NOT NULL,
	`google_books_id` varchar(255) NOT NULL,
	CONSTRAINT `books_table_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `bookshelves_table` (
	`id` int AUTO_INCREMENT NOT NULL,
	`user_id` int,
	`name` varchar(255) NOT NULL,
	`created_at` timestamp DEFAULT (now()),
	CONSTRAINT `bookshelves_table_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `bookshelves_to_books_table` (
	`id` int AUTO_INCREMENT NOT NULL,
	`bookshelf_id` int,
	`book_id` int,
	`added_at` timestamp DEFAULT (now()),
	CONSTRAINT `bookshelves_to_books_table_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
ALTER TABLE `bookshelves_table` ADD CONSTRAINT `bookshelves_table_user_id_users_table_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users_table`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `bookshelves_to_books_table` ADD CONSTRAINT `bookshelves_to_books_table_bookshelf_id_bookshelves_table_id_fk` FOREIGN KEY (`bookshelf_id`) REFERENCES `bookshelves_table`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `bookshelves_to_books_table` ADD CONSTRAINT `bookshelves_to_books_table_book_id_books_table_id_fk` FOREIGN KEY (`book_id`) REFERENCES `books_table`(`id`) ON DELETE no action ON UPDATE no action;