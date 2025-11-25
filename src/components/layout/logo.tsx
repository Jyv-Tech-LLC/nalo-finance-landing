import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export function Logo({ className, size = 32, showText = true }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Image
        src="/icon.svg"
        alt="NALO"
        width={size}
        height={size}
        className="shrink-0"
        priority
      />
      {showText && (
        <span className="text-xl font-black uppercase tracking-tight text-foreground">
          NALO
        </span>
      )}
    </div>
  );
}
