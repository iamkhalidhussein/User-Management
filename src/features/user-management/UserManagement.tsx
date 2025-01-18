import { Pagination } from "../../components/ui/pagination";
import { UserProvider } from "./UserProvider";
import { PageHeader } from "./components/PageHeader";
import { ResetButton } from "./components/ResetButton";
import { UserFilter } from "./components/UserFilter";
import { UserSearch } from "./components/UserSearch";
import { UserTable } from "./components/UserTable";
import { useFetchUsers } from "./hooks/useFetchUsers";
import { useUserContext } from "./hooks/useUserContext";

export const UserManagement = () => {
    return (
        <UserProvider>
            <UserManagementCotent/>
        </UserProvider>
    );
};

UserManagement.displayName = 'UserManagement';

const UserManagementCotent = () => {
    const { isLoading, error } = useFetchUsers();
    const { users } = useUserContext();

    console.log(isLoading, error, users);
    return (
        <div>
            <PageHeader/>
            <div className="mt-6"/>
            <div className="space-y-6">
                <div className="space-y-2">
                    <UserFilter/>
                    <div className="flex gap-2 items-center">
                        <div className="flex-1">
                            <UserSearch/>
                        </div>
                        <div>
                            <ResetButton/>
                        </div>
                    </div>
                </div>
                <UserTable users={users} isLoading={isLoading} error={error?.message ? '' : undefined}/>
                <Pagination totalPages={1} currentPage={1} onPageChange={() => {}}/>
            </div>
        </div>
    )
};