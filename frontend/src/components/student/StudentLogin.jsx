import React from 'react'
import  {zodResolver} from '@hookform/resolvers/zod'
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input} from "@/components/ui/input"
import { useForm } from 'react-hook-form'
import { axiosClient } from '../../api/axios'

const formSchema = z.object({
  email: z.string().email().min(2).max(50),
  password : z.string().min(8).max(50)
})

export default function StudentLogin() {
         const form = useForm({
            resolver: zodResolver(formSchema),
            defaultValues: {
            email: "salim@gmail.com",
            password:'123456768',
            },
        })


        const  onSubmit=  async values =>{

            const data = await axiosClient.post('/login' ,values)
            // Do something with the form values.
            // ✅ This will be type-safe and validated.
            console.log(data)
          }
    return (
        <div>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>

          )}
        />
         <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type={'password'} placeholder="Password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>

          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
        </div>
  )
}
