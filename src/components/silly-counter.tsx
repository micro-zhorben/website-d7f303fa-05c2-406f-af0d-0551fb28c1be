import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { useState } from "react";
import { Banana, PartyPopper } from "lucide-react";

export function SillyCounter() {
  const [count, setCount] = useState(0);
  const [showParty, setShowParty] = useState(false);

  const handleClick = () => {
    setCount((prev) => prev + 1);
    if ((count + 1) % 10 === 0) {
      setShowParty(true);
      setTimeout(() => setShowParty(false), 2000);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <Typography.H2 className="flex items-center gap-2">
        {showParty ? <PartyPopper className="text-accent" /> : <Banana className="text-accent" />}
        Счётчик бананов: {count}
      </Typography.H2>
      <Button
        onClick={handleClick}
        size="lg"
        className={`transition-all duration-300 ${
          showParty ? "animate-bounce bg-accent" : ""
        }`}
      >
        Добавить банан!
      </Button>
    </div>
  );
}