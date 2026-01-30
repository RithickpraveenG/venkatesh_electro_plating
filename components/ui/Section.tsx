import { HTMLAttributes } from 'react';
import { cn } from './Button';

interface SectionProps extends HTMLAttributes<HTMLDivElement> {
    fullWidth?: boolean;
    background?: 'default' | 'muted' | 'dark';
}

export const Section = ({ className, children, fullWidth = false, background = 'default', ...props }: SectionProps) => {
    const backgrounds = {
        default: 'bg-[var(--color-background)]',
        muted: 'bg-[var(--color-zinc-silver)] dark:bg-zinc-800/50',
        dark: 'bg-[var(--color-deep-blue)] text-white',
    };

    return (
        <section className={cn('py-16 md:py-24', backgrounds[background], className)} {...props}>
            <div className={cn('mx-auto px-4 md:px-6', fullWidth ? 'w-full' : 'max-w-7xl')}>
                {children}
            </div>
        </section>
    );
};
