import bg0 from '../assets/StoryPage/bg/bg0.png';
import bg1 from '../assets/StoryPage/bg/bg1.png';
import bg2 from '../assets/StoryPage/bg/bg2.png';
import bg2_1 from '../assets/StoryPage/bg/bg2-1.png';
import bg3 from '../assets/StoryPage/bg/bg3.jpg';
import bg4 from '../assets/StoryPage/bg/bg4.png';
import bg5 from '../assets/StoryPage/bg/bg5.png';
import bg5_1 from '../assets/StoryPage/bg/bg5-1.png';
import bg6 from '../assets/StoryPage/bg/bg6.png';
import bg7 from '../assets/StoryPage/bg/bg7.png';
import bg8 from '../assets/StoryPage/bg/bg8.png';

import character1 from '../assets/StoryPage/character1.png';
import character2 from '../assets/StoryPage/character2.png';
import character3 from '../assets/StoryPage/character3.png';

export const story = {
  title: "O Destino Além das Estrelas: A Missão que Mudou Tudo",
  prologue: [
    `     O ano é 2147. A Terra está passando por tempos difíceis. Os recursos naturais estão quase esgotados, e a humanidade precisa encontrar uma nova casa para sobreviver.`,
    `     A última esperança vem com a descoberta de exoplanetas, mundos que orbitam estrelas distantes e que podem ser habitáveis. Você faz parte da tripulação da nave Stella Explorer, liderada pela corajosa Capitã Aurora.`,
    `     Sua missão: encontrar um novo lar para a humanidade entre as estrelas...`
  ],
  chapters: [
    {
      chapter: 0,
      chapterName: "    Capítulo 0: Prólogo",
      conversations: [
        {
          title: "Título 0",
          description: `Diálogo 0`,
          backgroundImage: bg2,
          characterImage: character1,
        },
        {
          title: "Título 1",
          description: `Diálogo 1`,
          backgroundImage: bg2,
          characterImage: character1,
        },
        {
          title: "Título 2",
          description: `Diálogo 2`,
          backgroundImage: bg2_1,
          characterImage: character1,
          minigame: 0,
        },
      ],
    },
    {
      chapter: 1,
      chapterName: "    Capítulo 1: A decisão",
      conversations: [
        {
          title: "Título 3",
          description: `Diálogo 3`,
          backgroundImage: bg3,
          characterImage: character2,
        },
        {
          title: "Título 4",
          description: `Diálogo 4`,
          backgroundImage: bg3,
          characterImage: character2,
          minigame: 1,
        },
        {
          title: "Título 5",
          description: `Diálogo 5`,
          backgroundImage: bg3,
          characterImage: character2,
        },
      ]
    },
    {
      chapter: 2,
      chapterName: "    Capítulo final: O dilema",
      conversations: [
        {
          title: "Título 6",
          description: `Diálogo 6`,
          backgroundImage: bg4,
          characterImage: character3,
        }
      ]
    }
  ],
  credits: {
    team: 'T.A.R.D.I.S',
    slogan: 'Porque nada melhor do que aprender ciência com história.'
  }
};
