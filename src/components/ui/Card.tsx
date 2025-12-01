import { cn } from "@/lib/utils";

export function Card({
    className,
    children,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn(
                "rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:bg-white/10 hover:border-white/20",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
