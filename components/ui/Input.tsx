import { InputHTMLAttributes, TextareaHTMLAttributes, forwardRef } from 'react';
import { cn } from './Button';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ className, label, error, ...props }, ref) => {
        return (
            <div className="w-full">
                {label && (
                    <label className="block text-sm font-semibold text-[var(--color-steel-grey)] mb-1">
                        {label}
                    </label>
                )}
                <input
                    ref={ref}
                    className={cn(
                        'w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-olive-green)] transition-all',
                        'bg-white text-[var(--color-deep-blue)] placeholder-gray-400',
                        error
                            ? 'border-red-500 focus:ring-red-500'
                            : 'border-[var(--color-zinc-silver)] focus:border-[var(--color-olive-green)]',
                        className
                    )}
                    {...props}
                />
                {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
            </div>
        );
    }
);

Input.displayName = 'Input';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: string;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
    ({ className, label, error, ...props }, ref) => {
        return (
            <div className="w-full">
                {label && (
                    <label className="block text-sm font-semibold text-[var(--color-steel-grey)] mb-1">
                        {label}
                    </label>
                )}
                <textarea
                    ref={ref as any}
                    className={cn(
                        'w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-olive-green)] transition-all',
                        'bg-white text-[var(--color-deep-blue)] placeholder-gray-400',
                        error
                            ? 'border-red-500 focus:ring-red-500'
                            : 'border-[var(--color-zinc-silver)] focus:border-[var(--color-olive-green)]',
                        className
                    )}
                    {...props}
                />
                {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
            </div>
        );
    }
);

TextArea.displayName = 'TextArea';
