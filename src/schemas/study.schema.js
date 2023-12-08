import {z} from 'zod';

export const createStudySchema = z.object({
    names: z.string({
        required_error: 'Name is required'
    })
});

