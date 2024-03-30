'use client';
import React, { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { EditProfileSchema } from '@/lib/types';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button'
import { Loader2 } from 'lucide-react';


interface Props { }

const ProfileForm = (props: Props) => {
    const [isLoading, setIsLoading] = useState(false);

    const form = useForm<z.infer<typeof EditProfileSchema>>({
        mode: 'onChange',
        resolver: zodResolver(EditProfileSchema),
        defaultValues: {
            email: 'prankushgiri3@gmail.com',
            name: 'Prankush Giri'
        }
    });

    const handleSubmit = () => { };

    return (


        // name of the user 
        <Form {...form}>
            <form className="flex flex-col gap-6" onSubmit={form.handleSubmit(handleSubmit)}>
                <FormField
                    disabled={isLoading}
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-xl">Full Name</FormLabel>
                            <FormControl>
                                <Input
                                    {...field}
                                    placeholder="Name"
                                    className='text-md'
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />



                {/* email */}
                <FormField
                    disabled={isLoading}
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-xl">Email Address</FormLabel>
                            <FormControl>
                                <Input
                                    {...field}
                                    placeholder="email"
                                    className='text-md'
                                    disabled
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button
                    type="submit"
                    className="self-start rounded-3xl bg-[#e2f24b] dark:hover:bg-neutral-50 dark:hover:text-neutral-900 text-neutral-900  "
                >
                    {isLoading ? (
                        <>
                         <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Saving
                        </>
                    ) : (
                        'Save User Settings'
                    )}
                </Button>

            </form>
        </Form>
    );
};

export default ProfileForm;
