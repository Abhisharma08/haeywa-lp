import Image from 'next/image';
import { cn } from '@/lib/utils';

const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={cn("relative", className)}>
      <Image
        src="https://haeywa.ai/img/haeywa_logo.webp"
        alt="haeywa Logo"
        width={100}
        height={20}
        className="object-contain"
        priority
      />
    </div>
  );
};

export default Logo;
