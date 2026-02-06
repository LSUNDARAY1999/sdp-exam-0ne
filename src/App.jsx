
import FormBuilder from "./components/FormBuilder";

function App() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4">
          Dynamic Form Builder
        </h1>
        <FormBuilder />
      </div>
    </main>
  );
}

export default App;