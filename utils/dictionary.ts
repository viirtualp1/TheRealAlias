import WordsList from "./words.json";

export function getRandomWords(count: number) {
  const { data: words } = WordsList;

  if (count > words.length) {
    throw new Error(
      "Requested number of words exceeds available words in the list."
    );
  }

  const shuffled = words.sort(() => 0.5 - Math.random());

  return shuffled.slice(0, count);
}
