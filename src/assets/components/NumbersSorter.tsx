import Sort from "../Sort";

type NumbersSorterProps = {
  numbers: number[];
  order: string;
};

const NumbersSorter = ({ numbers, order }: NumbersSorterProps) => {
  const sortedNumbers = Sort(numbers, order);

  return (
    <>
      {sortedNumbers.length > 1 && (
        <div className="mt-5 p-4 bg-green-100 border border-green-400 rounded-lg text-green-700">
          <p className="font-semibold">Vos nombres triés sont : </p>
          <div className="flex flex-wrap gap-2 mt-2">
            {sortedNumbers.map((number, index) => {
              return (
                <div
                  key={index}
                  className="bg-green-500 text-white px-3 py-1 rounded-full text-sm"
                >
                  {number}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default NumbersSorter;
