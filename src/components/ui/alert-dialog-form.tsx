import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useForm, Controller } from 'react-hook-form';
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { v4 as uuidv4 } from 'uuid';
import toast from 'react-hot-toast';
import { Loader2 } from "lucide-react";

type UserButtonProps = {
    userButton: React.ComponentType<{ onClick: () => void }>;
};

export const AlertDialogForm = ({ userButton: UserButton }: UserButtonProps) => {
    const [open, setOpen] = useState(false);
    const axiosPublic = useAxiosPublic();
    const [loading, setLoading] = useState(false);
    const { 
        register, 
        handleSubmit,
        control 
    } = useForm();

    const onSubmit = async (data: any) => {
        const uniqueId = uuidv4()
        const newData = {
            ...data,
            id: uniqueId
        };
        try {
            setLoading(true);
            const response = await axiosPublic.post('/users/userdata', newData);
            if(response.data.success) {
                toast.success('User Added Successfully!');
            }
        } catch (error) {
            console.error('error while adding user', error);
            toast.success('something went wrong!');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
            <UserButton onClick={() => setOpen(true)}/>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
            <DialogTitle>Enter User Information</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
            <div className="flex items-center gap-4">
                <Label htmlFor="name" className="text-right w-28 ">
                Name
                </Label>
                <Input 
                    id="name" 
                    {...register("name")} 
                    className="col-span-10 border" 
                />
            </div>
            <div className="flex items-center gap-4">
                <Label htmlFor="email" className="text-right w-28">
                Email
                </Label>
                <Input 
                    id="email" 
                    type="email" 
                    {...register("email")} 
                    className="col-span-3 w-full border" 
                />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="role" className="text-right">
                    Role
                </Label>
                <Controller
                    name="role"
                    control={control}
                    render={({ field }) => (
                        <Select
                            {...field}
                            value={field.value}
                            onValueChange={field.onChange}
                        >
                            <SelectTrigger id="role" className="col-span-3">
                                <SelectValue placeholder="Select a role" />
                            </SelectTrigger>
                            <SelectContent id="role">
                                <SelectItem value="admin">Admin</SelectItem>
                                <SelectItem value="user">User</SelectItem>
                                <SelectItem value="manager">Manager</SelectItem>
                            </SelectContent>
                        </Select>
                    )}
                />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="status" className="text-right">
                Status
                </Label>
                <Controller
                    name="status"
                    control={control}
                    render={({ field }) => (
                        <Select
                            {...field}
                            value={field.value}
                            onValueChange={field.onChange}
                        >
                            <SelectTrigger id="status" className="col-span-3">
                                <SelectValue placeholder="Select a status" />
                            </SelectTrigger>
                            <SelectContent id="status">
                                <SelectItem value="active">Active</SelectItem>
                                <SelectItem value="inactive">Inactive</SelectItem>
                                <SelectItem value="pending">Pending</SelectItem>
                                <SelectItem value="suspended">Suspended</SelectItem>
                            </SelectContent>
                        </Select>
                    )}
                />
            </div>
            <Button type="submit" className="ml-auto" disabled={loading}>
                { loading ? <Loader2 className="animate-spin"/> : 'Submit' }
            </Button>
            </form>
        </DialogContent>
    </Dialog>
    )
};