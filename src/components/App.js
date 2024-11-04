import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";
import NextButton from "./NextButton";
import Progress from "./Progress";
import FinishScreen from "./FinishScreen";
import Footer from "./Footer";
import Timer from "./Timer";
import { useQuiz } from "../contexts/QuizContext";

export default function App() {
  const { status } = useQuiz();

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" ? <Loader /> : null}
        {status === "error" ? <Error /> : null}
        {status === "ready" ? <StartScreen /> : null}
        {status === "active" ? (
          <>
            <Progress />
            <Question />
            <Footer>
              <Timer />
              <NextButton />
            </Footer>
          </>
        ) : null}
        {status === "finish" ? <FinishScreen /> : null}
      </Main>
    </div>
  );
}
