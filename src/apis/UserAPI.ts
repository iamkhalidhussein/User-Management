import { Role, Status, User } from '../features/user-management/types';
import useAxiosPublic from '../hooks/useAxiosPublic';

type GetUsersParams = {
    page?: number;
    pageSize?: number;
    query?: string;
    role?: Role;
    status?: Status;
    sortBy?: keyof User;
    sortDirection?: 'asc' | 'desc';
}

class UserAPI {
    static async get({
        page = 1,
        pageSize = 10,
        query = '',
        role,
        status,
        sortBy = 'name',
        sortDirection = 'asc'
    }: GetUsersParams = {}) {
        const axiosPublic = useAxiosPublic();

        try {
            const response = await axiosPublic.get('/users/userdata', {
                params: { page, pageSize, query, role, status, sortBy, sortDirection }
            });
            return response.data;
        } catch (error) {
            // throw new Error(error);
        }
    }
}

export { UserAPI };
