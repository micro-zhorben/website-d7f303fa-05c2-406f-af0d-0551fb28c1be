import { Typography } from "@/components/ui/typography";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Banana,
  PartyPopper,
  Sparkles,
  Star,
  Laugh,
  Music,
} from "lucide-react";

export function Fun() {
  const [dancingEmojis, setDancingEmojis] = useState<string[]>([]);
  const [isParty, setIsParty] = useState(false);

  const startParty = () => {
    setIsParty(true);
    const emojis = ["🎈", "🎉", "🎊", "✨", "🌟", "🎵", "🎶"];
    setDancingEmojis(
      Array.from({ length: 20 }, () => emojis[Math.floor(Math.random() * emojis.length)])
    );
    setTimeout(() => {
      setIsParty(false);
      setDancingEmojis([]);
    }, 3000);
  };

  return (
    <div className="container space-y-8 py-8">
      <section className="text-center">
        <Typography.H1 className="flex items-center justify-center gap-2">
          <PartyPopper className="text-accent" />
          Страница веселья!
          <Laugh className="text-accent" />
        </Typography.H1>
        <Typography.Lead>
          Здесь мы просто веселимся без всякой причины!
        </Typography.Lead>
      </section>

      <div className="grid gap-6 md:grid-cols-2">
        <Card
          className={`transition-all duration-300 ${
            isParty ? "animate-bounce bg-accent" : ""
          }`}
        >
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <Music className="h-5 w-5 text-primary" />
              <Typography.H3>Время вечеринки!</Typography.H3>
            </div>
            <Typography.P className="mb-4">
              Нажми кнопку и начни самую бессмысленную вечеринку в мире!
            </Typography.P>
            <Button onClick={startParty} size="lg" className="w-full">
              Начать вечеринку! 🎉
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-accent" />
              <Typography.H3>Случайные факты</Typography.H3>
            </div>
            <Typography.P>
              Бананы на самом деле ягоды! А помидоры - фрукты! А этот сайт -
              просто набор случайных элементов! 🤪
            </Typography.P>
          </CardContent>
        </Card>
      </div>

      <div className="relative min-h-[200px]">
        {dancingEmojis.map((emoji, index) => (
          <span
            key={index}
            className="absolute animate-bounce text-4xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 1000}ms`,
            }}
          >
            {emoji}
          </span>
        ))}
      </div>

      <section className="flex justify-center">
        <Card className="max-w-lg">
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-secondary" />
              <Typography.H3>Совет дня</Typography.H3>
            </div>
            <Typography.P>
              Если вы видите танцующий банан{" "}
              <Banana className="inline h-5 w-5 animate-spin text-accent" />,
              значит, вы слишком долго смотрите на этот сайт! 🤪
            </Typography.P>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}