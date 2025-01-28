import { type VariantProps, cva } from 'class-variance-authority';
import { Loader, type LucideProps } from 'lucide-react';
import React from 'react';
import { cn } from '~/lib/utils';

export const sizes = {
  sm: 'h-4 w-4',
  default: 'h-6 w-6',
  lg: 'h-8 w-8',
} as const;

const loadingVariants = cva('text-inherit animate-spin-loader', {
  variants: {
    size: sizes,
  },
  defaultVariants: {
    size: 'default',
  },
});

export type LoadingProps = VariantProps<typeof loadingVariants> & LucideProps;

const Loading = React.forwardRef<SVGSVGElement, LoadingProps>(({ className, size, ...props }, ref) => {
  return <Loader className={cn(loadingVariants({ size }), className, '')} {...props} ref={ref} />;
});
Loading.displayName = 'Loading';

export { Loading };
