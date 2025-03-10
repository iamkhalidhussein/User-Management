import { AlertDialogForm } from "@/components/ui/alert-dialog-form";
import { Button } from "../../../components/ui/button";

export const PageHeader = () => {
    
    const UserButton = ({ onClick }: { onClick: () => void }) => {
        return (
            <Button onClick={onClick}>Add User</Button>
        )
    };

    return (
        <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">User Management</h1>
            <AlertDialogForm userButton={UserButton}/>
        </div>
    )
};

PageHeader.displayName = 'PageHeader';