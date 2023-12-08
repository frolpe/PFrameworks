import {z} from 'zod';

export const createProjectSchema = z.object({
    names: z.string({
        required_error: 'Name is required'
    }),
    description: z.string({
        required_error: 'Description must be a string'
    }), 
    link: z.string({
        required_error: 'Link must be a string'
    }),
});

