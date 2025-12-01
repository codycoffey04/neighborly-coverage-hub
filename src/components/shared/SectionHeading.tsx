import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'white' | 'primary';
  centered?: boolean;
  as?: 'h2' | 'h3';
}

export const SectionHeading = ({
  children,
  className,
  variant = 'default',
  centered = false,
  as: Component = 'h2'
}: SectionHeadingProps) => {
  const variantClasses = {
    default: 'text-foreground',
    white: 'text-white',
    primary: 'text-primary'
  };

  return (
    <Component
      className={cn(
        "text-2xl md:text-3xl lg:text-4xl font-bold",
        variantClasses[variant],
        centered && "text-center",
        className
      )}
    >
      {children}
    </Component>
  );
};
