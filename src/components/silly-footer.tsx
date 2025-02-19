import { Typography } from "@/components/ui/typography";
import { Heart } from "lucide-react";

export function SillyFooter() {
  return (
    <footer className="mt-auto border-t py-6">
      <div className="container flex items-center justify-center gap-1">
        <Typography.Small className="text-muted-foreground">
          Сделано с
        </Typography.Small>
        <Heart className="h-4 w-4 text-destructive" />
        <Typography.Small className="text-muted-foreground">
          и бананами
        </Typography.Small>
      </div>
    </footer>
  );
}