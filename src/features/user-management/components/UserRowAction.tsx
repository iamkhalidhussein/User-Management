import { EditPencilIcon } from "../../../components/icons/edit-pencil";
import { EyeIcon } from "../../../components/icons/eye";
import { TrashIcon } from "../../../components/icons/trash";
import { IconButton } from "../../../components/ui/IconButton";
import { memo } from "react";

export const UserRowActions = memo(() => {
    const classes = 'hover:bg-zinc-200 p-1';

    return (
        <>
            <IconButton icon={EyeIcon} size={15} className={classes}/>
            <IconButton icon={EditPencilIcon} size={15} className={classes}/>
            <IconButton 
            icon={TrashIcon} 
            size={15} 
            className={`${classes} text-red-500`}
            />
        </>
    )
});

UserRowActions.displayName = 'UserRowActions';