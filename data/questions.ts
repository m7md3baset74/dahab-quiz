export type Option = {
  name: string;
  image: string;
};

export type Question = {
  id: number;
  question: string;
  options: Option[];
  correctAnswer: string;
};

export const questions: Question[] = [
  {
    id: 1,
    question: "موظف السفرية بينام بدري ويصحى بدري؟ 😂",
    options: [
      { name: "3baset", image: "/players/mohamed.png" },
      { name: "basel", image: "/players/basel.png" },
      { name: "mohab", image: "/players/mohab.png" },
      { name: "hamdi", image: "/players/hamdy.png" },
      { name: "baher", image: "/players/baher.png" },
    ],
    correctAnswer: "basel",
  },
  {
    id: 2,
    question: "بيهضم اسرع من؟ 😂",
    options: [
      { name: "3baset", image: "/players/mohamed.png" },
      { name: "basel", image: "/players/basel.png" },
      { name: "mohab", image: "/players/mohab.png" },
      { name: "hamdi", image: "/players/hamdy.png" },
      { name: "baher", image: "/players/baher.png" },
    ],
    correctAnswer: "hamdi",
  },
  {
    id: 3,
    question: "جاي يدور على حريم؟ 😂",
    options: [
      { name: "3baset", image: "/players/mohamed.png" },
      { name: "basel", image: "/players/basel.png" },
      { name: "mohab", image: "/players/mohab.png" },
      { name: "hamdi", image: "/players/hamdy.png" },
      { name: "baher", image: "/players/baher.png" },
    ],
    correctAnswer: "baher",
  },
  {
    id: 4,
    question: "بينزل آخر واحد وبنستناه تحت؟ 😂",
    options: [
      { name: "3baset", image: "/players/mohamed.png" },
      { name: "basel", image: "/players/basel.png" },
      { name: "mohab", image: "/players/mohab.png" },
      { name: "hamdi", image: "/players/hamdy.png" },
      { name: "baher", image: "/players/baher.png" },
    ],
    correctAnswer: "3baset",
  },
];