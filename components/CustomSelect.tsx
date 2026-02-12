import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';

interface Option {
    label: string;
    value: any;
    disabled?: boolean;
}

interface CustomSelectProps {
    value: any;
    onChange: (value: any) => void;
    options: Option[];
    placeholder?: string;
    className?: string;
    error?: boolean;
}

export const CustomSelect: React.FC<CustomSelectProps> = ({
    value,
    onChange,
    options,
    placeholder = "Selecione...",
    className = "",
    error = false
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const selectedOption = options.find(opt => opt.value === value);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className={`relative ${className}`} ref={containerRef}>
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className={`w-full flex items-center justify-between p-2.5 bg-muted border rounded-lg text-sm text-foreground focus:ring-2 focus:ring-ring outline-none transition-all ${error ? 'border-amber-400 dark:border-amber-500/50 bg-amber-50/50 dark:bg-amber-950/10' : 'border-border hover:border-primary/30'
                    } ${isOpen ? 'border-primary ring-1 ring-primary/20 bg-background shadow-sm' : ''}`}
            >
                <span className={`truncate ${!selectedOption && 'text-muted-foreground'}`}>
                    {selectedOption ? selectedOption.label : placeholder}
                </span>
                <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {isOpen && (
                <div className="absolute z-50 w-full mt-1.5 bg-card border border-border rounded-lg shadow-xl py-1 max-h-[300px] overflow-y-auto animate-in fade-in zoom-in duration-200">
                    {options.map((option) => (
                        <button
                            key={option.value}
                            type="button"
                            disabled={option.disabled}
                            onClick={() => {
                                onChange(option.value);
                                setIsOpen(false);
                            }}
                            className={`w-full flex items-center justify-between px-3 py-2 text-sm transition-colors ${option.value === value
                                ? 'bg-primary/10 text-primary font-medium'
                                : 'text-foreground hover:bg-muted'
                                } ${option.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                        >
                            <span className="truncate">{option.label}</span>
                            {option.value === value && <Check className="w-3.5 h-3.5" />}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};
