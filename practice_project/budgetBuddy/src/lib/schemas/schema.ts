import { z } from 'zod';

export const transactionTypeEnum = z.enum(['EXPENSE', 'INCOME']);

export const budgetFormSchema = z
	.object({
		name: z
			.string()
			.nonempty('name is required')
			.min(3, 'Name should at least be 3 character long'),
		description: z
			.string()
			.nonempty('Description is required')
			.min(3, 'description should at least be 3 character long'),
		amount: z.number().positive('Amount should be a positive number'),
		budgetType: transactionTypeEnum,
		category: z.number(),
		startDate: z.date(),
		endDate: z.date()
	})
	.refine((data) => data.endDate > data.startDate, {
		message: 'End date should grater than start date',
		path: ['endDate']
	});
