import {z} from 'zod';

export const createExperienceSchema = z.object({
    names: z.string({
        required_error: 'Name is required'
    }),
    position: z.string({
        required_error: 'Position must be a String'
    }), 
    time: z.string({
        required_error: 'Time must be a String'
    }),
    description: z.string({
        required_error: 'Description must be a string'
    })
});

