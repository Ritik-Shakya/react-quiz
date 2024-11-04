import { useQuiz } from "../contexts/QuizContext";

function Progress() {
  const { questions, index, answer, points, maxPossiblePoints } = useQuiz();

  return (
    <header className="progress">
      <progress
        max={questions.length}
        value={index + Number(answer !== null)}
      />
      <p>
        Question <strong>{index + 1}</strong> / {questions.length}
      </p>
      <p>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;
