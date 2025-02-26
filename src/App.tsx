import "./App.css";
import { useState, useRef } from "react";

import NumbersSorter from "./assets/components/NumbersSorter";

const App = () => {
  const [data, setData] = useState("");
  const [error, setError] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [sortOrder, setSortOrder] = useState("");

  const formRef = useRef(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const isValid = /^[0-9]+(,[0-9]+)*$/.test(data);

    if (!isValid) {
      setIsValid(false);
      setError(true);
    } else {
      setIsValid(true);
      setError(false);
    }
  };

  // créer une fonction qui va transformer la string en tableau de nombres séparés d'un virgule et sans guillemets

  const strToNumbersArray = (data: string) => {
    return data.split(",").map((value) => {
      return parseInt(value);
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-5">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-sm">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-5">
          Triez vos nombres
        </h1>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col space-y-4 "
        >
          <label htmlFor="numbers" className="block text-gray-700 font-medium">
            Entrez une liste de nombre, séparez les d'une virgule, sinon les
            deux nombres seront comptés comme un seul :
          </label>

          <input
            required={true}
            id="numbers"
            type="text"
            placeholder="Ex : 2,59,18,290"
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={data}
            onChange={(e) => {
              setData(e.target.value);
              setIsValid(false);
            }}
          />
          {error === true && (
            <p className="text-red-500 text-sm">
              N'entrez que des nombres séparés d'un virgule svp.
            </p>
          )}

          <select
            className="w-28 mt-3"
            name="order"
            id="order"
            required={true}
            onChange={(e) => {
              setSortOrder(e.target.value);
            }}
            defaultValue=""
          >
            <option value="" disabled={true}>
              Choisir l'odre de tri
            </option>
            <option value="ascending">Croissant</option>
            <option value="descending">Décroissant</option>
          </select>

          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-15 rounded-lg hover:bg-blue-600 transition"
            >
              Trier
            </button>
            <button
              type="button"
              className="bg-gray-300 text-gray-700 py-2 px-15 rounded-lg hover:bg-gray-400 transition"
              onClick={() => {
                setData("");
                setError(false);
                setIsValid(false);
                setSortOrder("");
                if (formRef.current) {
                  formRef.current.reset();
                }
              }}
            >
              Reset
            </button>
          </div>
        </form>

        {isValid && (
          <NumbersSorter numbers={strToNumbersArray(data)} order={sortOrder} />
        )}
      </div>
    </div>
  );
};

export default App;
