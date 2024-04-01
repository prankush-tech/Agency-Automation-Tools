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
            <form className="flex flex-col gap-7 md:min-w-[20rem] lg:min-w-[26rem] lg:gap-[10vh]" onSubmit={form.handleSubmit(handleSubmit)}>
                <FormField
                    disabled={isLoading}
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-md  lg:text-[1.3rem]">Full Name</FormLabel>
                            <FormControl>
                                <Input
                                    {...field}
                                    placeholder="Name"
                                    className='text-sm md:text-md lg:text-[1.3rem]
                                    border focus:border-neutral-50'
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
                            <FormLabel className="text-md  lg:text-[1.3rem]">Email Address</FormLabel>
                            <FormControl>
                                <Input
                                    {...field}
                                    placeholder="email"
                                    className='text-sm md:text-
                                    border  lg:text-[1.3rem] focus:border-neutral-50'
                                    disabled
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button
                    type="submit"
                    className="self-start rounded-3xl lg:rounded-[3rem] bg-[#e2f24b] dark:hover:bg-neutral-50 dark:hover:text-neutral-900 text-neutral-900  lg:text-[1.3rem] lg:p-8 "
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
