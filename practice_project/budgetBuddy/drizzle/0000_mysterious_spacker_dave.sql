CREATE TABLE `budgets` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`amount` int NOT NULL,
	`name` varchar(255) NOT NULL,
	`description` varchar(255) NOT NULL,
	`startDate` date NOT NULL,
	`endDate` date NOT NULL,
	`createdAt` timestamp DEFAULT (now()),
	`budget_type` enum('EXPENSE') NOT NULL,
	`category_id` int NOT NULL,
	CONSTRAINT `budgets_id` PRIMARY KEY(`id`),
	CONSTRAINT `budgets_name_unique` UNIQUE(`name`)
);
--> statement-breakpoint
CREATE TABLE `categories` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`category_type` enum('EXPENSE','INCOME') NOT NULL,
	`createdAt` timestamp DEFAULT (now()),
	`updatedAt` timestamp,
	CONSTRAINT `categories_id` PRIMARY KEY(`id`),
	CONSTRAINT `categories_name_unique` UNIQUE(`name`)
);
--> statement-breakpoint
CREATE TABLE `transactions` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`amount` int NOT NULL,
	`description` varchar(255) NOT NULL,
	`transactionDate` date,
	`transaction_type` enum('EXPENSE','INCOME') NOT NULL,
	`transaction_category` int NOT NULL,
	`budget` int NOT NULL,
	`createdAt` timestamp DEFAULT (now()),
	`updatedAt` timestamp,
	CONSTRAINT `transactions_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
ALTER TABLE `budgets` ADD CONSTRAINT `budgets_category_id_categories_id_fk` FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `transactions` ADD CONSTRAINT `transactions_transaction_category_categories_id_fk` FOREIGN KEY (`transaction_category`) REFERENCES `categories`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `transactions` ADD CONSTRAINT `transactions_budget_budgets_id_fk` FOREIGN KEY (`budget`) REFERENCES `budgets`(`id`) ON DELETE no action ON UPDATE no action;