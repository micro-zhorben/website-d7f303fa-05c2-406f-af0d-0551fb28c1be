import { Typography } from "@/components/ui/typography";
import { Loader2 } from "lucide-react";

interface SillyLoaderProps {
  text?: string;
}

export function SillyLoader({ text = "Загрузка..." }: SillyLoaderProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Loader2 className="h-8 w-8 animate-spin text-primary" />
      <Typography.P className="animate-pulse">{text}</Typography.P>
    </div>
  );
}