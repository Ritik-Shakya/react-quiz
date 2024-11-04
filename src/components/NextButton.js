import { useQuiz } from "../contexts/QuizContext";

function NextButton() {
  const { dispatch, answer, index, questions } = useQuiz();

  if (answer === null) return null;
  if (index + 1 < questions.length)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );

  if (index + 1 === questions.length)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish
      </button>
    );
}

export default NextButton;
