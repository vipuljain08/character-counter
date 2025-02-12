import { useEffect, useState } from "react";

interface LetterDensityProps {
  text: string;
}

interface LetterProgressBarProps {
  letter: string;
  frequency: number;
  totalChar: number;
}

function LetterProgressBar({
  letter,
  frequency,
  totalChar,
}: LetterProgressBarProps) {
  const widthPercentage = ((frequency / totalChar) * 100).toFixed(2);
  return (
    <div className="my-2 flex gap-4 items-center">
      <span className="w-4">{letter}</span>
      <div className="flex grow h-4 bg-[#202c32] rounded-full">
        <div
          style={{ width: `${widthPercentage}%` }}
          className="bg-purple rounded-l-full"
        ></div>
      </div>
      <span>{`${frequency} (${widthPercentage}%)`}</span>
    </div>
  );
}

export default function LetterDensity({ text }: LetterDensityProps) {
  const [letterFrequencyMap, setLetterFrequencyMap] = useState(
    new Map<string, number>()
  );
  const [limit, setLimit] = useState(5);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (!text) {
      setLetterFrequencyMap(new Map());
      return;
    }
    const frequencyMap = new Map();
    let count = 0;
    for (let char of text) {
      if (char.match(/^[A-Za-z]+$/)) {
        char = char.toUpperCase();
        frequencyMap.set(char, (frequencyMap.get(char) || 0) + 1);
        count++;
      }
    }
    setTotal(count);
    const sortedEntries = [...frequencyMap.entries()].sort(
      (a, b) => b[1] - a[1]
    );
    setLetterFrequencyMap(new Map(sortedEntries));
  }, [text]);

  useEffect(() => {
    console.log(letterFrequencyMap);
  }, [letterFrequencyMap]);

  return (
    <div className="mt-4 md:mt-8 ml-2">
      <h2 className="text-lg text-left md:text-xl md:mb-2">Letter Density</h2>
      {[...letterFrequencyMap.entries()].map(
        (elem, index) =>
          index < limit && (
            <LetterProgressBar
              key={`${elem}-${index}`}
              letter={elem[0]}
              frequency={elem[1]}
              totalChar={total}
            />
          )
        // return <p key={`${elem}-${index}`}>{`${elem[0]} : ${elem[1]}`}</p>
      )}
      {(letterFrequencyMap.size > 5 && limit < letterFrequencyMap.size) && (
        <p
          onClick={() => setLimit((prevLimit) => prevLimit + 5)}
          className="font-light text-xs md:text-base text-left cursor-pointer"
        >
          See more &#9660;
        </p>
      )}
      {letterFrequencyMap.size === 0 && (
        <p className="font-light text-xs md:text-base text-left">
          No characters found. Start typing to see letter density.
        </p>
      )}
    </div>
  );
}
