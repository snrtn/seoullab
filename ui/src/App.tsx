import { useStore } from "./store/useStore";

function App() {
  const count = useStore((state) => state.count);
  const increment = useStore((state) => state.increment);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-6 bg-white shadow rounded text-center">
        <h1 className="text-2xl font-bold mb-4">Zustand Count: {count}</h1>
        <button
          onClick={increment}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Increment
        </button>
      </div>
    </div>
  );
}

export default App;
