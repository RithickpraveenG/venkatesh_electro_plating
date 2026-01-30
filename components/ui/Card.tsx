import { HTMLAttributes, forwardRef } from 'react';
import { cn } from './Button';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    hoverEffect?: boolean;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
    ({ className, hoverEffect = false, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    'bg-white dark:bg-[var(--color-zinc-silver)]/10 border border-[var(--color-zinc-silver)] p-6 shadow-sm rounded-lg',
                    hoverEffect && 'transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[var(--color-olive-green)]',
                    className
                )}
                {...props}
            />
        );
    }
);

Card.displayName = 'Card';

export const CardHeader = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
    <div className={cn('mb-4', className)} {...props} />
);

export const CardTitle = ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className={cn('text-xl font-bold text-[var(--color-deep-blue)] dark:text-white mb-2 uppercase tracking-wide', className)} {...props} />
);

export const CardContent = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
    <div className={cn('text-[var(--color-steel-grey)] dark:text-gray-300', className)} {...props} />
);
