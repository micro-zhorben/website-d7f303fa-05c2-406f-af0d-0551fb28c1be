import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Sparkles } from "lucide-react";

interface BouncyCardProps {
  title: string;
  content: string;
}

export function BouncyCard({ title, content }: BouncyCardProps) {
  const [isJumping, setIsJumping] = useState(false);

  return (
    <Card
      className={`transition-all duration-300 ${
        isJumping ? "animate-bounce" : ""
      }`}
    >
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-accent" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Typography.P>{content}</Typography.P>
        <Button
          className="mt-4"
          variant="outline"
          onClick={() => setIsJumping(!isJumping)}
        >
          {isJumping ? "Остановить" : "Попрыгать!"}
        </Button>
      </CardContent>
    </Card>
  );
}