import { Typography } from "@/components/ui/typography";
import { ModeToggle } from "@/components/mode-toggle";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Banana, Home, PartyPopper, Puzzle } from "lucide-react";

export function SillyHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center space-x-6">
            <Link to="/" className="flex items-center space-x-2">
              <Banana className="h-6 w-6 text-accent" />
              <Typography.Large>Глупый Сайт</Typography.Large>
            </Link>
          </nav>
          <nav className="flex items-center space-x-4">
            <Link to="/">
              <Button variant="ghost" size="icon" className="text-foreground">
                <Home className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/fun">
              <Button variant="ghost" size="icon" className="text-foreground">
                <PartyPopper className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/games">
              <Button variant="ghost" size="icon" className="text-foreground">
                <Puzzle className="h-4 w-4" />
              </Button>
            </Link>
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}