import { Typography } from "@/components/ui/typography";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Puzzle,
  Dices,
  Gamepad2,
  Trophy,
  Sparkles,
  PartyPopper,
} from "lucide-react";

export function Games() {
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState("");
  const [isWin, setIsWin] = useState(false);

  const playDice = () => {
    const result = Math.floor(Math.random() * 6) + 1;
    setScore(result);
    if (result === 6) {
      setMessage("Поздравляем! Вы выбросили 6! 🎉");
      setIsWin(true);
      setTimeout(() => setIsWin(false), 2000);
    } else {
      setMessage(`Выпало число ${result}. Попробуйте ещё раз!`);
    }
  };

  return (
    <div className="container space-y-8 py-8">
      <section className="text-center">
        <Typography.H1 className="flex items-center justify-center gap-2">
          <Gamepad2 className="text-accent" />
          Игровая комната
          <Puzzle className="text-accent" />
        </Typography.H1>
        <Typography.Lead>
          Добро пожаловать в самую бессмысленную игровую комнату в интернете!
        </Typography.Lead>
      </section>

      <div className="grid gap-6 md:grid-cols-2">
        <Card
          className={`transition-all duration-300 ${
            isWin ? "animate-bounce bg-accent" : ""
          }`}
        >
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <Dices className="h-5 w-5 text-primary" />
              <Typography.H3>Игра в кости</Typography.H3>
            </div>
            <div className="mb-4 space-y-2">
              <Typography.P>
                Бросьте кость и попытайтесь выбросить 6! Текущий бросок: {score}
              </Typography.P>
              <Typography.P
                className={`${isWin ? "text-accent" : "text-muted-foreground"}`}
              >
                {message}
              </Typography.P>
            </div>
            <Button onClick={playDice} size="lg" className="w-full">
              Бросить кость! 🎲
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-accent" />
              <Typography.H3>Таблица рекордов</Typography.H3>
            </div>
            <div className="space-y-2">
              <Typography.P>🥇 Банан - 999 очков</Typography.P>
              <Typography.P>🥈 Картошка - 888 очков</Typography.P>
              <Typography.P>🥉 Морковка - 777 очков</Typography.P>
            </div>
          </CardContent>
        </Card>
      </div>

      {isWin && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="space-y-4 text-center">
            <PartyPopper className="h-16 w-16 animate-spin text-accent" />
            <Sparkles className="h-16 w-16 animate-pulse text-primary" />
          </div>
        </div>
      )}

      <section className="text-center">
        <Card className="inline-block">
          <CardContent className="p-6">
            <Typography.H4 className="mb-2">Подсказка дня:</Typography.H4>
            <Typography.P>
              Если вы читаете это, значит, вы действительно дошли до конца самого
              глупого сайта в мире! Поздравляем! 🎉
            </Typography.P>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}