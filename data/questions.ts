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
    question: "موظف السفرية بينام بدري ويصحى بدري 😂",
    options: [
      { name: "3baset", image: "/players/3baset.jpg" },
      { name: "basel", image: "/players/basel.jpg" },
      { name: "mohab", image: "/players/mohab.jpg" },
      { name: "hamdi", image: "/players/hamdy.jpg" },
      { name: "baher", image: "/players/baher.jpg" },
    ],
    correctAnswer: "basel",
  },
  {
    id: 2,
    question: "بيهضم اسرع من مرتدات الريال 😂",
    options: [
      { name: "3baset", image: "/players/3baset.jpg" },
      { name: "basel", image: "/players/basel.jpg" },
      { name: "mohab", image: "/players/mohab.jpg" },
      { name: "hamdi", image: "/players/hamdy.jpg" },
      { name: "baher", image: "/players/baher.jpg" },
    ],
    correctAnswer: "hamdi",
  },
  {
    id: 3,
    question: "جاي يدور على حريم 😂",
    options: [
      { name: "3baset", image: "/players/3baset.jpg" },
      { name: "basel", image: "/players/basel.jpg" },
      { name: "mohab", image: "/players/mohab.jpg" },
      { name: "hamdi", image: "/players/hamdy.jpg" },
      { name: "baher", image: "/players/baher.jpg" },
    ],
    correctAnswer: "baher",
  },
  {
    id: 4,
    question: "بينزل آخر واحد وبنستناه تحت 😂",
    options: [
      { name: "3baset", image: "/players/3baset.jpg" },
      { name: "basel", image: "/players/basel.jpg" },
      { name: "mohab", image: "/players/mohab.jpg" },
      { name: "hamdi", image: "/players/hamdy.jpg" },
      { name: "baher", image: "/players/baher.jpg" },
    ],
    correctAnswer: "3baset",
  },
];