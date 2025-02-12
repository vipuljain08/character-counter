import CardItem from "./CardItem";

interface CardProps {
  characterCount: number,
  wordCount: number,
  sentenceCount: number
}

export default function Card({characterCount, wordCount, sentenceCount} : CardProps) {
  return (
    <div className="flex flex-col md:flex-row gap-4 justify-center mt-2">
      <CardItem label="Total Characters" count={characterCount} bgColor="bg-purple"/>
      <CardItem label="Word Count" count={wordCount} bgColor="bg-yellow"/>
      <CardItem label="Sentence Count" count={sentenceCount} bgColor="bg-orange"/>
    </div>
  );
}
