interface TextareaProps {
  value: string;
  onInput: (v: string) => void;
}

// min-w-[50rem] min-h-[10rem]

export default function Textarea({ onInput, value }: TextareaProps) {
  return (
    <textarea
      value={value}
      onInput={(e) => onInput(e.currentTarget.value)}
      placeholder="Start typing here... (or paste your text)"
      className="w-full h-48 p-2 md:p-4 mt-5 text-white bg-[#161314] border-2 border-[#242222] rounded-[2vw]"
    ></textarea>
  );
}
