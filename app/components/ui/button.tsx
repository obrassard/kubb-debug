import { Slot } from '@radix-ui/react-slot';
import { type VariantProps, cva } from 'class-variance-authority';
import * as React from 'react';
import { Loading } from '~/components/ui/loading';
import { cn } from '~/lib/utils';

export const variants = {
  default: 'border shadow-sm',
  secondary: 'border shadow-sm',
  outline:
    'border border-input bg-background text-foreground shadow-sm focus-visible:ring-ring/30 hover:bg-muted active:bg-muted/75',
  ghost: 'text-foreground focus-visible:ring-ring/30 hover:bg-muted active:bg-muted/75',
  link: 'text-primary underline-offset-4 focus-visible:ring-ring/30 hover:underline active:opacity-70',
  info: 'border shadow-sm',
  success: 'border shadow-sm',
  warning: 'border shadow-sm',
  destructive: 'border shadow-sm',
} as const;

export const themes = {
  plain: '',
  tonal: '',
} as const;

export const sizes = {
  sm: 'h-8 rounded-md px-3',
  default: 'h-9 px-4 py-2',
  lg: 'h-10 rounded-md px-8',
  icon: 'h-9 w-9',
} as const;

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: variants,
      size: sizes,
      theme: themes,
    },
    compoundVariants: [
      {
        variant: 'default',
        theme: 'plain',
        className:
          'border-primary-dark bg-primary text-primary-foreground focus-visible:ring-ring/30 hover:bg-primary/85 active:bg-primary/90',
      },
      {
        variant: 'default',
        theme: 'tonal',
        className:
          'border-primary/15 bg-primary/10 text-primary focus-visible:ring-ring/30 hover:bg-primary/5 active:bg-primary/15',
      },
      {
        variant: 'secondary',
        theme: 'plain',
        className:
          'border-secondary-dark bg-secondary text-secondary-foreground focus-visible:ring-ring/30 hover:bg-secondary/85 active:bg-secondary/90',
      },
      {
        variant: 'secondary',
        theme: 'tonal',
        className:
          'border-secondary/15 bg-secondary/10 text-secondary focus-visible:ring-ring/30 hover:bg-secondary/5 active:bg-secondary/15',
      },
      {
        variant: 'info',
        theme: 'plain',
        className:
          'border-info-dark bg-info text-info-foreground focus-visible:ring-info/30 hover:bg-info/85 active:bg-info/90',
      },
      {
        variant: 'info',
        theme: 'tonal',
        className: 'border-info/15 bg-info/10 text-info focus-visible:ring-info/30 hover:bg-info/5 active:bg-info/15',
      },
      {
        variant: 'success',
        theme: 'plain',
        className:
          'border-success-dark bg-success text-success-foreground focus-visible:ring-success/30 hover:bg-success/85 active:bg-success/90',
      },
      {
        variant: 'success',
        theme: 'tonal',
        className:
          'border-success/15 bg-success/10 text-success focus-visible:ring-success/30 hover:bg-success/5 active:bg-success/15',
      },
      {
        variant: 'warning',
        theme: 'plain',
        className:
          'border-warning-dark bg-warning text-warning-foreground focus-visible:ring-warning/30 hover:bg-warning/85 active:bg-warning/90',
      },
      {
        variant: 'warning',
        theme: 'tonal',
        className:
          'border-warning/15 bg-warning/10 text-warning focus-visible:ring-warning/30 hover:bg-warning/5 active:bg-warning/15',
      },
      {
        variant: 'destructive',
        theme: 'plain',
        className:
          'border-destructive-dark bg-destructive text-destructive-foreground focus-visible:ring-destructive/30 hover:bg-destructive/85 active:bg-destructive/90',
      },
      {
        variant: 'destructive',
        theme: 'tonal',
        className:
          'border-destructive/15 bg-destructive/10 text-destructive focus-visible:ring-destructive/30 hover:bg-destructive/5 active:bg-destructive/15',
      },
    ],
    defaultVariants: {
      variant: 'default',
      size: 'default',
      theme: 'plain',
    },
  },
);

interface BaseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
}

const BaseButton = React.forwardRef<HTMLButtonElement, BaseButtonProps>(
  ({ className, variant, theme, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return <Comp className={cn(buttonVariants({ variant, theme, size, className }))} ref={ref} {...props} />;
  },
);
BaseButton.displayName = 'BaseButton';

export type ButtonProps = BaseButtonProps & {
  loading?: boolean;
  icon?: React.ReactNode;
};
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ icon, loading, children, disabled, ...props }, ref) => {
    return (
      <BaseButton {...props} ref={ref} disabled={loading ? true : disabled}>
        <Slot className="w-4 h-4 first:mr-2">{icon}</Slot>
        {loading ? (
          <Slot className="first:mr-2">
            <Loading size="sm" />
          </Slot>
        ) : null}
        {children}
      </BaseButton>
    );
  },
);
Button.displayName = 'Button';

export { BaseButton, Button, buttonVariants };
