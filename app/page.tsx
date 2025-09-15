import Image from "next/image";

export default function Home() {
  const SIZE = 12
  const grid: number[] = []
  let count = 0
  for (let i = 0; i < SIZE; i++) {
    for (let j = 0; j < SIZE; j++) {
      if (j !== 0 && j !== SIZE - 1 && i !== 0 && i !== SIZE - 1) {
        grid.push(1)
      }
      else {
        grid.push(0)
      }
    }
    count += 1
  }

  return (
    <div className="h-dvh bg-[#252525]">
      <div className="bg-[#3f5147] text-4xl font-bold text-center">
        Welcome to my website!
      </div>
    </div>
  );    
}
