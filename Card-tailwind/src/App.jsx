import './App.css'
import Card from "./components/card.jsx";

function App() {
  return (
    <>
      <h1 className="text-2xl text-center mt-6 font-bold">
        Team Members
      </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
            <Card name="Yashvardhan" role="Frontend Dev" image="https://images.pexels.com/photos/13837367/pexels-photo-13837367.jpeg" />
            <Card name="Rahul" role="Backend Dev" image="https://images.pexels.com/photos/13837367/pexels-photo-13837367.jpeg" />
            <Card name="Aman" role="Full Stack" image="https://images.pexels.com/photos/13837367/pexels-photo-13837367.jpeg" />
            <Card name="Yashvardhan" role="Frontend Dev" image="https://images.pexels.com/photos/13837367/pexels-photo-13837367.jpeg" />
            <Card name="Rahul" role="Backend Dev" image="https://images.pexels.com/photos/13837367/pexels-photo-13837367.jpeg" />
            <Card name="Aman" role="Full Stack" image="https://images.pexels.com/photos/13837367/pexels-photo-13837367.jpeg" />
        </div>
    </>
  );
}

export default App;