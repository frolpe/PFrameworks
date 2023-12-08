import {z} from 'zod';

export const userSchema = z.object({
    username: z.string({
        required_error: 'Username is required'
    }),
    email: z.string({
        required_error: 'Email is required'
    }).email({
        required_error: 'Invalid email'
    }),
    names: z.string({
        required_error: 'Name is required'
    }),
    lastname: z.string({
        required_error: 'Lastname is required'
    }), 
    age: z.number({
        required_error: 'Age is required'
    })
});
