import {z} from 'zod';

export const createSkillSchema = z.object({
    names: z.string({
        required_error: 'Name is required'
    }),
    description: z.string({
        required_error: 'Description must be a string'
    })
});

