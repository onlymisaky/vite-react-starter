import { useMemo } from 'react';

interface LoadingProps {
  type?: 'default' | 'success' | 'warning' | 'error' | 'info'
}

function Loading({ type = 'default' }: LoadingProps) {
  const borderColor = useMemo(() => {
    return {
      default: 'border-blue-500',
      success: 'border-green-500',
      warning: 'border-yellow-500',
      error: 'border-red-500',
      info: 'border-gray-500',
    }[type];
  }, [type]);

  return (
    <div className="flex items-center justify-center min-h-[200px]">
      <div className={`animate-spin rounded-full h-12 w-12 border-4 ${borderColor} border-t-transparent`}></div>
    </div>
  );
};

export default Loading;
