import { ChangeEvent, useCallback, useState } from "react";
import { Search } from "../../../components/ui/search";
import { useUserContext } from "../hooks/useUserContext";
import { debounce } from "../../../utils/debounce";

export const UserSearch = () => {
    const { updateSearch, filter } = useUserContext();
    const [query, setQuery] = useState(filter.query || '');

    const debouncedQuery = useCallback(debounce((query: string) => {
        updateSearch(query)
    }, 500), []);

    const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setQuery(value);
        debouncedQuery(query);
    };
    return (
        <div>
            <Search 
                placeholder="Search user"
                value={query}
                onChange={handleSearch}
                key={query ?? 'default_query'}
                />
        </div>
    )
};