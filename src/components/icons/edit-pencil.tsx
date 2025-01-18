import { clsx } from "clsx";
import type { SVGIconType } from './type';

export const EditPencilIcon = ({
    className,
    size = 15,
    strokeWidth = 2,
}: SVGIconType) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            className={clsx(className)}
        >
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
        </svg>
    )
};