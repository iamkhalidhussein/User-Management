import { clsx } from "clsx";
import type { SVGIconType } from './type';

export const ErrorInfoIcon = ({
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
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12" y2="16" />
        </svg>
    );
};