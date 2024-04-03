import { WorkflowFormSchema } from '@/lib/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Form,FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Loader2 } from 'lucide-react';

interface Props {
    title?: string;
    subtitle?: string;
}

const WorkFLowForm = ({ title, subtitle }: Props) => {
    const form = useForm<z.infer<typeof WorkflowFormSchema>>({
        mode: 'onChange',
        resolver: zodResolver(WorkflowFormSchema),
        defaultValues: {
            name: '',
            description: ''
        }
    });

    const isLoading = form.formState.isLoading;
    const router = useRouter();

    const handleSubmitForm = async (values: z.infer<typeof WorkflowFormSchema>) => {
        // const workflow = await onCreateWorkflow(values.name, values.description)
        // if (workflow) {
        //   toast.message(workflow.message)
        //   router.refresh()
        // }
        // setClose()
    };

    return (
        <Card className="w-full max-w-[650px] border-none " >
            {title &&
                subtitle && (
                    <CardHeader>
                        <CardTitle>{title}</CardTitle>
                        <CardDescription>{subtitle}</CardDescription>
                    </CardHeader>
                )}

            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleSubmitForm)} className="flex flex-col gap-4 text-left">
                        <FormField
                            disabled={isLoading}
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input {...field} 
                                        placeholder="Name"
                                        className='border' 
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                            />

                        <FormField
                            disabled={isLoading}
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Description</FormLabel>
                                    <FormControl>
                                        <Input 
                                        placeholder="Description"
                                        className='border' 
                                         {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button
                            className="mt-4 bg-[#e2f24b] text-neutral-900 hover:text-neutral-50 dark:hover:text-neutral-900"
                            disabled={isLoading}
                            type="submit"
                            
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Saving
                                </>
                            ) : (
                                'Save Settings'
                            )}
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
};

export default WorkFLowForm;
