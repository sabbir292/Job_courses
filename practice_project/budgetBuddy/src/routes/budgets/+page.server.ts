import type { Actions } from './$types';

export const actions: Actions = {
	createBudget: async ({ request }) => {
		try {
			const formData = await request.formData();
			const formValues = Object.fromEntries(formData);
			// do something with it
			return {
				data: formValues,
				message: 'formCreated successfully'
			};
		} catch (error) {
			console.error(error);
		}
	}
	// testCategory: async ({ request }) => {
	// 	try {
	// 		const formData = await request.formData();
	// 		console.log('Submitted form data:', Object.fromEntries(formData));
	// 		// do something with it
	// 	} catch (error) {
	// 		console.error(error);
	// 	}
	// }
};
