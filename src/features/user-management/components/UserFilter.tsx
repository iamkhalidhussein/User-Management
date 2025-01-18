import { Select } from "../../../components/ui/select";

export const UserFilter = () => {
    return (
        <div className="flex gap-2">
            <Select label="role" options={[
                { text: 'All', value: '' },
                { text: 'User', value: 'user' },
                { text: 'Admin', value: 'admin' },
                { text: 'Manager', value: 'manager' },
            ]}/>

            <Select
                label="Sort by"
                options={[
                    { text: 'Id', value: 'id' },
                    { text: 'Name', value: 'name' },
                    { text: 'Email', value: 'email' },
                    { text: 'Role', value: 'role' },
                    { text: 'Status', value: 'status' },
                ]}
            />

            <Select
                label="Order by"
                options={[
                    { text: 'Ascending', value: 'asc' },
                    { text: 'Descending', value: 'desc' },
                ]}
            />
        </div>
    )
};