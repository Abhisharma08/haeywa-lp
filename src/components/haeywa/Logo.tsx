import Image from 'next/image';
import { cn } from '@/lib/utils';

const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={cn("relative", className)}>
      <Image
        src="https://haeywa.ai/img/haeywa_logo.webp"
        alt="haeywa Logo"
        width={120}
        height={40}
        className="object-contain w-[100px] sm:w-[120px] md:w-[140px] h-auto"
        priority
      />
    </div>
  );
};

export default Logo;
