import Image from 'next/image';
import { cn } from '@/lib/utils';

const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={cn("relative", className)}>
      <Image
        src="https://haeywa.ai/img/haeywa_logo.webp"
        alt="haeywa Logo"
        width={80}
        height={20}
        className="object-contain w-[70px] sm:w-[70px] md:w-[70px] h-auto"
        priority
      />
    </div>
  );
};

export default Logo;
