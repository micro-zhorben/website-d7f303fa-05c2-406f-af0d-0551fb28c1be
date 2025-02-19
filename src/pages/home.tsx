import { Typography } from "@/components/ui/typography";
import { BouncyCard } from "@/components/bouncy-card";
import { SillyCounter } from "@/components/silly-counter";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { PartyPopper, Puzzle } from "lucide-react";

export function Home() {
  return (
    <div className="container space-y-8 py-8">
      <section className="space-y-4 text-center">
        <Typography.H1>
          Добро пожаловать на самый глупый сайт в мире! 🍌
        </Typography.H1>
        <Typography.Lead>
          Здесь нет ничего полезного, но зато очень весело!
        </Typography.Lead>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <BouncyCard
          title="Почему этот сайт существует?"
          content="Потому что каждому иногда нужно немного глупости в жизни! Нажми на кнопку ниже, чтобы заставить карточку прыгать. Просто потому что можем!"
        />
        <BouncyCard
          title="Что здесь делать?"
          content="Абсолютно ничего полезного! Можно считать бананы, заставлять карточки прыгать и радоваться жизни. А ещё у нас есть тёмная тема!"
        />
      </section>

      <section className="space-y-6 py-8">
        <SillyCounter />
      </section>

      <section className="flex justify-center gap-4">
        <Link to="/fun">
          <Button size="lg" className="gap-2">
            <PartyPopper className="h-5 w-5" />
            Хочу веселиться!
          </Button>
        </Link>
        <Link to="/games">
          <Button size="lg" variant="outline" className="gap-2">
            <Puzzle className="h-5 w-5" />
            Хочу играть!
          </Button>
        </Link>
      </section>
    </div>
  );
}