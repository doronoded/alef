import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import confetti from 'canvas-confetti';
import { Check, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import questions, { Question } from './questions';
import Sound from './Sound';

const HebrewAnimalGame = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [gameStarted, setGameStarted] = useState<boolean>(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const _confetti = useRef<() => void>();

  
  useEffect (() => {
    if (canvasRef.current){
        _confetti.current = confetti.create(canvasRef.current);
        canvasRef.current.width = document.documentElement.clientWidth;
        canvasRef.current.height = document.documentElement.clientHeight;
    }
  }, [canvasRef])


  const shuffleArray = (array: Question[]) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const [shuffledQuestions] = useState<Question[]>(() => shuffleArray(questions));

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    setShowAnswer(true);
    if (answer === shuffledQuestions[currentQuestion].offspringHebrew) {
        _confetti.current && _confetti.current();
        Sound.success();
        setScore(score + 10);
    }
    else {
        Sound.failure();
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < shuffledQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowAnswer(false);
      setSelectedAnswer(null);
    } else {
      // Game over
      setGameStarted(false);
    }
  };

  const startNewGame = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowAnswer(false);
    setSelectedAnswer(null);
    setGameStarted(true);
  };

  const getCurrentQuestion = () => shuffledQuestions[currentQuestion];

  return (
    <>
    <div className="absolute inset-0 p-4 flex items-center justify-center" style={{minWidth: '350px'}}>
      <Card className="w-full max-w-xl">
        <CardContent className="p-6">
          {!gameStarted ? (
            <div className="text-center">
              <h1 className="text-2xl font-bold mb-4">חיות ובני משפחה</h1>
              <p className="mb-6">שמות צאצאי בעלי חיים! שחק עכשיו!</p>
              <Button onClick={startNewGame} className="w-full">
                התחל משחק!
              </Button>
            </div>
          ) : (
            <>
              <div className="flex justify-between items-center mb-6">
                <span className="text-lg font-semibold">ציון: {score}</span>
                <span className="text-lg">
                  שאלה {currentQuestion + 1}/{shuffledQuestions.length}
                </span>
              </div>

              <div className="mb-8 text-center">
                <h2 className="text-xl mb-2">מה השם של הצאצא של {getCurrentQuestion().animalHebrew}?</h2>
                {/* <p className="text-gray-600">({getCurrentQuestion().animal})</p> */}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {getCurrentQuestion().options.map((option, index) => (
                  <Button
                    key={index}
                    onClick={() => !showAnswer && handleAnswer(option)}
                    className={`h-16 text-lg ${
                      showAnswer
                        ? option === getCurrentQuestion().offspringHebrew
                          ? 'bg-green-500 hover:bg-green-600'
                          : option === selectedAnswer
                          ? 'bg-red-500 hover:bg-red-600'
                          : 'bg-gray-300 hover:bg-gray-400'
                        : 'bg-blue-500 hover:bg-blue-600'
                    }`}
                    disabled={showAnswer}
                  >
                    {option}
                    {showAnswer && option === getCurrentQuestion().offspringHebrew && (
                      <Check className="ml-2" />
                    )}
                    {showAnswer && option === selectedAnswer && option !== getCurrentQuestion().offspringHebrew && (
                      <X className="ml-2" />
                    )}
                  </Button>
                ))}
              </div>

              {showAnswer && (
                <div className="mt-6 text-center">
                  <p className="mb-4">
                    {selectedAnswer === getCurrentQuestion().offspringHebrew
                      ? 'נכון! 🎉'
                      : `לא נכון! התשובה הנכונה היא ${getCurrentQuestion().offspringHebrew}`}
                  </p>
                  <Button onClick={nextQuestion} className="w-full">
                    {currentQuestion === shuffledQuestions.length - 1 ? 'סיים את המשחק!' : 'שאלה הבאה'}
                  </Button>
                </div>
              )}
            </>
          )}
        </CardContent>
      </Card>
    </div>
    <canvas id="cnvs" ref={canvasRef} className="absolute inset-0 pointer-events-none" />
    </>
  );
};

export default HebrewAnimalGame;