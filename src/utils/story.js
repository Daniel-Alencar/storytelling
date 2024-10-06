import backgroundImage0 from '../assets/StoryPage/background0.webp';
import backgroundImage1 from '../assets/StoryPage/background1.webp';

import character0 from '../assets/StoryPage/character0.png';
import character1 from '../assets/StoryPage/character1.png';

export const story = [
  {
    chapter: 0,
    chapterName: "Capítulo 0: Prólogo",
    conversations: [
      {
        title: "Título 0",
        description: "Diálogo 0",
        backgroundImage: backgroundImage0,
        characterImage: character0,
      },
      {
        title: "Título 1",
        description: `Diálogo 1`,
        backgroundImage: backgroundImage1,
        characterImage: character1,
      },
      {
        title: "Título 2",
        description: `Diálogo 2`,
        backgroundImage: backgroundImage0,
        characterImage: character0,
      },
    ],
  },
  {
    chapter: 1,
    chapterName: "Capítulo 1: A decisão",
    conversations: [
      {
        title: "Título 3",
        description: `Diálogo 3`,
        backgroundImage: backgroundImage1,
        characterImage: character1,
      },
      {
        title: "Título 4",
        description: `Diálogo 4`,
        backgroundImage: backgroundImage0,
        characterImage: character0,
        showMinigame: true,
      },
      {
        title: "Título 5",
        description: `Diálogo 5`,
        backgroundImage: backgroundImage1,
        characterImage: character1,
      },
    ]
  },
  {
    chapter: 2,
    chapterName: "Capítulo final: O dilema",
    conversations: [
      {
        title: "Título 6",
        description: "Diálogo 6",
        backgroundImage: backgroundImage0,
        characterImage: character0,
      }
    ]
  }
];
