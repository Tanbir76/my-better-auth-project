"use client"
import { useRouter } from "next/navigation";
import { authClient } from "../../../lib/auth-client";
import { Button, Description, FieldError, Form, Input, Label, TextField, toast } from "@heroui/react";

const SignUP = () => {
    const router= useRouter();
    const onSubmit = async(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        // Convert FormData to plain object
        const {data:resData, error}= await  authClient.signUp.email({
            name:data.name,
            email:data.email,
            password:data.password,
        })
        console.log(resData, error);
        if(resData?.user?.name){
            router.push('/sign-in');
            toast.success('Account creat successfully!')
        }else if(error){
            toast.error(error.message || "Something went wrong!")
        }
    };
    const handleGoogleSignIn =async()=>{
        const resData =await authClient.signIn.social({
            provider:'google',
        });
        console.log('after google sign in', resData); 
        if(resData?.user?.name){
            toast.success('Account creat successfully!')
            router.push('/sign-in')
        }
    }
    return (
        <div className="flex justify-center mt-20 ">
            <Form
                className="flex w-96 flex-col gap-4 "
                render={(props) => <form {...props} data-custom="foo" />}
                onSubmit={onSubmit}
            >
                <TextField
                    isRequired
                    name="name"
                    type="text"
                >
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                    <FieldError />
                </TextField>
                <TextField
                    isRequired
                    name="email"
                    type="email"
                    validate={(value) => {
                        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                            return "Please enter a valid email address";
                        }
                        return null;
                    }}
                >
                    <Label>Email</Label>
                    <Input placeholder="Enter your email" />
                    <FieldError />
                </TextField>
                <TextField
                    isRequired
                    minLength={8}
                    name="password"
                    type="password"
                    validate={(value) => {
                        if (value.length < 8) {
                            return "Password must be at least 8 characters";
                        }
                        if (!/[A-Z]/.test(value)) {
                            return "Password must contain at least one uppercase letter";
                        }
                        if (!/[0-9]/.test(value)) {
                            return "Password must contain at least one number";
                        }
                        return null;
                    }}
                >
                    <Label>Password</Label>
                    <Input placeholder="Enter your password" />
                    <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                    <FieldError />
                </TextField>
                <div className="flex gap-2">
                    <Button type="submit">
                        Submit
                    </Button>
                    <Button type="reset" variant="secondary">
                        Reset
                    </Button>
                </div>
            <p>OR</p>
            <Button onClick={handleGoogleSignIn}>Sign in Google</Button>
            </Form>
        </div>
    );
};

export default SignUP;