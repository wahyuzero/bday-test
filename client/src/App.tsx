import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Scene1Intro from "./components/Scene1Intro";
import Scene2Message from "./components/Scene2Message";
import Scene3Appreciation from "./components/Scene3Appreciation";
import Scene4Letter from "./components/Scene4Letter";
import Scene5WishBoard from "./components/Scene5WishBoard";
import Scene6Ending from "./components/Scene6Ending";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  const [currentScene, setCurrentScene] = useState(0);

  const scenes = [
    <Scene1Intro key="scene1" onNext={() => setCurrentScene(1)} />,
    <Scene2Message key="scene2" onNext={() => setCurrentScene(2)} />,
    <Scene3Appreciation key="scene3" onNext={() => setCurrentScene(3)} />,
    <Scene4Letter key="scene4" onNext={() => setCurrentScene(4)} />,
    <Scene5WishBoard key="scene5" onNext={() => setCurrentScene(5)} />,
    <Scene6Ending key="scene6" onRestart={() => setCurrentScene(0)} />,
  ];

  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <div className="w-full h-screen bg-background text-foreground overflow-hidden">
          <AnimatePresence mode="wait">
            {scenes[currentScene]}
          </AnimatePresence>
        </div>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
