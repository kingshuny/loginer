import { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log("유즈이펙트");
    const intervalId = setInterval(() => {
      console.log("5초 마다유즈이펙트");

      const canvas = document.createElement("canvas");
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const context = canvas.getContext("2d");
      context.clearRect(0, 0, canvas.width, canvas.height);
    }, 5000); // 5초마다 화면 그리기
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h1>Hello, World!</h1>
    </div>
  );
}

export default App;
