import { PrismaClient, QuestionType, UserRole } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.user.createMany({
    data: [
      {
        id: '4638ff16-0da8-11f0-8d3d-325096b39f47',
        name: 'Admin',
        email: 'admin@gmail.com',
        password: 'admin123',
        role: UserRole.ADMIN,
      },
      {
        id: '5252edde-0da8-11f0-9169-325096b39f47',
        name: 'Josip',
        email: 'josip@gmail.com',
        password: 'josip123',
        role: UserRole.USER,
      },
      {
        id: '64ffd690-0da8-11f0-85c8-325096b39f47',
        name: 'Jelena',
        email: 'jelena@gmail.com',
        password: 'jelena123',
        role: UserRole.USER,
      },
      {
        id: '6a7b8c9d-0da8-11f0-bd5b-325096b39f47',
        name: 'Marko',
        email: 'marko@gmail.com',
        password: 'marko123',
        role: UserRole.USER,
      },
      {
        id: '7b8c9d0e-0da8-11f0-bd5b-325096b39f47',
        name: 'Frane',
        email: 'frane@gmail.com',
        password: 'frane123',
        role: UserRole.USER,
      },
    ],
  });

  await prisma.category.createMany({
    data: [
      {
        id: '1a2b3c4d-0da7-11f0-bd5b-325096b39f47',
        name: 'Sports',
      },
      {
        id: '8b299762-0da7-11f0-9d07-325096b39f47',
        name: 'General Knowledge',
      },
      {
        id: 'b665941c-0da7-11f0-bd5b-325096b39f47',
        name: 'History',
      },
      {
        id: 'c7f5b8e4-0da7-11f0-bd9b-325096b39f47',
        name: 'Geography',
      },
    ],
  });

  await prisma.quiz.createMany({
    data: [
      {
        id: '1a2b3c4d-0da7-11f0-bd5b-325096b39f47',
        title: 'Football Quiz',
        img: 'https://assets.goal.com/images/v3/getty-2201476691/crop/MM5DKMBQGQ5DEOBRGU5G433XMU5DAORVGIYQ====/GettyImages-2201476691.jpg',
        categoryId: '1a2b3c4d-0da7-11f0-bd5b-325096b39f47', // Sports
      },
      {
        id: '8b299762-0da7-11f0-9d07-325096b39f47',
        title: 'Basketball Trivia',
        img: 'https://example.com/basketball.jpg',
        categoryId: '1a2b3c4d-0da7-11f0-bd5b-325096b39f47', // Sports
      },
      {
        id: '8b299762-0da7-11f0-9d07-325096b39f48',
        title: 'Ultimate General Knowledge',
        img: 'https://example.com/general-knowledge.jpg',
        categoryId: '8b299762-0da7-11f0-9d07-325096b39f47', // General Knowledge
      },
      {
        id: 'b665941c-0da7-11f0-bd5b-325096b39f47',
        title: 'World History Quiz',
        img: 'https://example.com/history.jpg',
        categoryId: 'b665941c-0da7-11f0-bd5b-325096b39f47', // History
      },
      {
        id: 'c7f5b8e4-0da7-11f0-bd9b-325096b39f47',
        title: 'Geography Explorer',
        img: 'https://example.com/geography.jpg',
        categoryId: 'c7f5b8e4-0da7-11f0-bd9b-325096b39f47', // Geography
      },
      {
        id: 'c7f5b8e4-0da7-11f0-bd9b-325096b39f48',
        title: 'Capital Cities Quiz',
        img: 'https://example.com/capitals.jpg',
        categoryId: 'c7f5b8e4-0da7-11f0-bd9b-325096b39f47', // Geography
      },
    ],
  });

  await prisma.question.createMany({
    data: [
      // Football Quiz
      {
        id: '1a2b3c4d-0da7-11f0-bd5b-325096b39f48',
        text: 'Where was the first World Cup held?',
        type: 'MULTIPLE_CHOICE',
        quizId: '1a2b3c4d-0da7-11f0-bd5b-325096b39f47',
      },
      {
        id: '1a2b3c4d-0da7-11f0-bd5b-325096b39f49',
        text: "Who won the most Ballon d'Or awards?",
        type: 'MULTIPLE_CHOICE',
        quizId: '1a2b3c4d-0da7-11f0-bd5b-325096b39f47',
      },
      {
        id: '1a2b3c4d-0da7-11f0-bd5b-325096b39f50',
        text: 'The offside rule in football means a player must be behind the last defender before receiving the ball.',
        type: 'TRUE_FALSE',
        quizId: '1a2b3c4d-0da7-11f0-bd5b-325096b39f47',
      },
      {
        id: '1a2b3c4d-0da7-11f0-bd5b-325096b39f51',
        text: 'Complete the name of this famous footballer: Kylian ____',
        type: 'FILL_IN_THE_BLANK',
        quizId: '1a2b3c4d-0da7-11f0-bd5b-325096b39f47',
      },
      {
        id: '1a2b3c4d-0da7-11f0-bd5b-325096b39f52',
        text: 'Cristiano Ronaldo started his professional career at which club?',
        type: 'MULTIPLE_CHOICE',
        quizId: '1a2b3c4d-0da7-11f0-bd5b-325096b39f47',
      },

      // Basketball Trivia
      {
        id: '8b299762-0da7-11f0-9d07-325096b39f48',
        text: 'Who has the most NBA championships as a player?',
        type: 'MULTIPLE_CHOICE',
        quizId: '8b299762-0da7-11f0-9d07-325096b39f47',
      },
      {
        id: '8b299762-0da7-11f0-9d07-325096b39f49',
        text: 'What is the standard height of a basketball hoop?',
        type: 'MULTIPLE_CHOICE',
        quizId: '8b299762-0da7-11f0-9d07-325096b39f47',
      },
      {
        id: '8b299762-0da7-11f0-9d07-325096b39f50',
        text: 'Michael Jordan played his entire career with the Chicago Bulls.',
        type: 'TRUE_FALSE',
        quizId: '8b299762-0da7-11f0-9d07-325096b39f47',
      },
      {
        id: '8b299762-0da7-11f0-9d07-325096b39f51',
        text: 'Complete the famous phrase: "Nothing but ____"',
        type: 'FILL_IN_THE_BLANK',
        quizId: '8b299762-0da7-11f0-9d07-325096b39f47',
      },
      {
        id: '8b299762-0da7-11f0-9d07-325096b39f52',
        text: 'The NBA was founded in which year?',
        type: 'MULTIPLE_CHOICE',
        quizId: '8b299762-0da7-11f0-9d07-325096b39f47',
      },

      // Ultimate General Knowledge
      {
        id: '8b299762-0da7-11f0-9d07-325096b39f53',
        text: 'What is the capital of Australia?',
        type: 'MULTIPLE_CHOICE',
        quizId: '8b299762-0da7-11f0-9d07-325096b39f48',
      },
      {
        id: '8b299762-0da7-11f0-9d07-325096b39f54',
        text: 'How many continents are there?',
        type: 'MULTIPLE_CHOICE',
        quizId: '8b299762-0da7-11f0-9d07-325096b39f48',
      },
      {
        id: '8b299762-0da7-11f0-9d07-325096b39f55',
        text: 'The Great Wall of China can be seen from space.',
        type: 'TRUE_FALSE',
        quizId: '8b299762-0da7-11f0-9d07-325096b39f48',
      },
      {
        id: '8b299762-0da7-11f0-9d07-325096b39f56',
        text: 'Complete the saying: "The early bird catches the ____"',
        type: 'FILL_IN_THE_BLANK',
        quizId: '8b299762-0da7-11f0-9d07-325096b39f48',
      },
      {
        id: '8b299762-0da7-11f0-9d07-325096b39f57',
        text: 'Which planet is closest to the Sun?',
        type: 'MULTIPLE_CHOICE',
        quizId: '8b299762-0da7-11f0-9d07-325096b39f48',
      },

      // World History Quiz
      {
        id: 'a2a66668-0da7-11f0-bf7a-325096b39f62',
        text: 'In which year did World War II end?',
        type: 'MULTIPLE_CHOICE',
        quizId: 'b665941c-0da7-11f0-bd5b-325096b39f47',
      },
      {
        id: 'a2a66668-0da7-11f0-bf7a-325096b39f63',
        text: 'Who was the first president of the United States?',
        type: 'MULTIPLE_CHOICE',
        quizId: 'b665941c-0da7-11f0-bd5b-325096b39f47',
      },
      {
        id: 'a2a66668-0da7-11f0-bf7a-325096b39f64',
        text: 'The Roman Empire fell in the year 476 AD.',
        type: 'TRUE_FALSE',
        quizId: 'b665941c-0da7-11f0-bd5b-325096b39f47',
      },
      {
        id: 'a2a66668-0da7-11f0-bf7a-325096b39f65',
        text: 'The Great Wall of ____ was built to protect against invasions.',
        type: 'FILL_IN_THE_BLANK',
        quizId: 'b665941c-0da7-11f0-bd5b-325096b39f47',
      },
      {
        id: 'a2a66668-0da7-11f0-bf7a-325096b39f66',
        text: 'What year did the French Revolution begin?',
        type: 'MULTIPLE_CHOICE',
        quizId: 'b665941c-0da7-11f0-bd5b-325096b39f47',
      },

      // Geography Explorer
      {
        id: 'a2a66668-0da7-11f0-bf7a-325096b39f67',
        text: 'What is the largest continent by land area?',
        type: 'MULTIPLE_CHOICE',
        quizId: 'c7f5b8e4-0da7-11f0-bd9b-325096b39f47',
      },
      {
        id: 'a2a66668-0da7-11f0-bf7a-325096b39f68',
        text: 'Which ocean is the largest?',
        type: 'MULTIPLE_CHOICE',
        quizId: 'c7f5b8e4-0da7-11f0-bd9b-325096b39f47',
      },
      {
        id: 'a2a66668-0da7-11f0-bf7a-325096b39f69',
        text: 'The Amazon River is the longest river in the world.',
        type: 'TRUE_FALSE',
        quizId: 'c7f5b8e4-0da7-11f0-bd9b-325096b39f47',
      },
      {
        id: 'a2a66668-0da7-11f0-bf7a-325096b39f70',
        text: 'Mount Everest is located in ____.',
        type: 'FILL_IN_THE_BLANK',
        quizId: 'c7f5b8e4-0da7-11f0-bd9b-325096b39f47',
      },
      {
        id: 'a2a66668-0da7-11f0-bf7a-325096b39f71',
        text: 'What is the driest desert on Earth?',
        type: 'MULTIPLE_CHOICE',
        quizId: 'c7f5b8e4-0da7-11f0-bd9b-325096b39f47',
      },

      // Capital Cities Quiz
      {
        id: 'a2a66668-0da7-11f0-bf7a-325096b39f72',
        text: 'What is the capital of Canada?',
        type: 'MULTIPLE_CHOICE',
        quizId: 'c7f5b8e4-0da7-11f0-bd9b-325096b39f48',
      },
      {
        id: 'a2a66668-0da7-11f0-bf7a-325096b39f73',
        text: 'Which city is the capital of Brazil?',
        type: 'MULTIPLE_CHOICE',
        quizId: 'c7f5b8e4-0da7-11f0-bd9b-325096b39f48',
      },
      {
        id: 'a2a66668-0da7-11f0-bf7a-325096b39f74',
        text: 'Paris is the capital of Germany.',
        type: 'TRUE_FALSE',
        quizId: 'c7f5b8e4-0da7-11f0-bd9b-325096b39f48',
      },
      {
        id: 'a2a66668-0da7-11f0-bf7a-325096b39f75',
        text: 'The capital of Japan is ____.',
        type: 'FILL_IN_THE_BLANK',
        quizId: 'c7f5b8e4-0da7-11f0-bd9b-325096b39f48',
      },
      {
        id: 'a2a66668-0da7-11f0-bf7a-325096b39f76',
        text: 'Which country has its capital in Cairo?',
        type: 'MULTIPLE_CHOICE',
        quizId: 'c7f5b8e4-0da7-11f0-bd9b-325096b39f48',
      },
    ],
  });

  await prisma.answer.createMany({
    data: [
      // Football Quiz
      {
        id: 'a1',
        text: 'Uruguay',
        isCorrect: true,
        questionId: '1a2b3c4d-0da7-11f0-bd5b-325096b39f48',
      },
      {
        id: 'a2',
        text: 'Brazil',
        isCorrect: false,
        questionId: '1a2b3c4d-0da7-11f0-bd5b-325096b39f48',
      },
      {
        id: 'a3',
        text: 'Italy',
        isCorrect: false,
        questionId: '1a2b3c4d-0da7-11f0-bd5b-325096b39f48',
      },
      {
        id: 'a4',
        text: 'Germany',
        isCorrect: false,
        questionId: '1a2b3c4d-0da7-11f0-bd5b-325096b39f48',
      },

      {
        id: 'b1',
        text: 'Lionel Messi',
        isCorrect: true,
        questionId: '1a2b3c4d-0da7-11f0-bd5b-325096b39f49',
      },
      {
        id: 'b2',
        text: 'Cristiano Ronaldo',
        isCorrect: false,
        questionId: '1a2b3c4d-0da7-11f0-bd5b-325096b39f49',
      },
      {
        id: 'b3',
        text: 'Johan Cruyff',
        isCorrect: false,
        questionId: '1a2b3c4d-0da7-11f0-bd5b-325096b39f49',
      },
      {
        id: 'b4',
        text: 'Michel Platini',
        isCorrect: false,
        questionId: '1a2b3c4d-0da7-11f0-bd5b-325096b39f49',
      },

      {
        id: 'c1',
        text: 'True',
        isCorrect: false,
        questionId: '1a2b3c4d-0da7-11f0-bd5b-325096b39f50',
      },
      {
        id: 'c2',
        text: 'False',
        isCorrect: true,
        questionId: '1a2b3c4d-0da7-11f0-bd5b-325096b39f50',
      },

      {
        id: 'd1',
        text: 'Mbappé',
        isCorrect: true,
        questionId: '1a2b3c4d-0da7-11f0-bd5b-325096b39f51',
      },

      {
        id: 'e1',
        text: 'Sporting CP',
        isCorrect: true,
        questionId: '1a2b3c4d-0da7-11f0-bd5b-325096b39f52',
      },
      {
        id: 'e2',
        text: 'Manchester United',
        isCorrect: false,
        questionId: '1a2b3c4d-0da7-11f0-bd5b-325096b39f52',
      },
      {
        id: 'e3',
        text: 'Real Madrid',
        isCorrect: false,
        questionId: '1a2b3c4d-0da7-11f0-bd5b-325096b39f52',
      },
      {
        id: 'e4',
        text: 'Porto',
        isCorrect: false,
        questionId: '1a2b3c4d-0da7-11f0-bd5b-325096b39f52',
      },

      // Basketball Trivia
      {
        id: 'f1',
        text: 'Bill Russell',
        isCorrect: true,
        questionId: '8b299762-0da7-11f0-9d07-325096b39f48',
      },
      {
        id: 'f2',
        text: 'Michael Jordan',
        isCorrect: false,
        questionId: '8b299762-0da7-11f0-9d07-325096b39f48',
      },
      {
        id: 'f3',
        text: 'Kareem Abdul-Jabbar',
        isCorrect: false,
        questionId: '8b299762-0da7-11f0-9d07-325096b39f48',
      },
      {
        id: 'f4',
        text: 'LeBron James',
        isCorrect: false,
        questionId: '8b299762-0da7-11f0-9d07-325096b39f48',
      },

      {
        id: 'g1',
        text: '10 feet',
        isCorrect: true,
        questionId: '8b299762-0da7-11f0-9d07-325096b39f49',
      },
      {
        id: 'g2',
        text: '12 feet',
        isCorrect: false,
        questionId: '8b299762-0da7-11f0-9d07-325096b39f49',
      },
      {
        id: 'g3',
        text: '8 feet',
        isCorrect: false,
        questionId: '8b299762-0da7-11f0-9d07-325096b39f49',
      },
      {
        id: 'g4',
        text: '11 feet',
        isCorrect: false,
        questionId: '8b299762-0da7-11f0-9d07-325096b39f49',
      },

      {
        id: 'h1',
        text: 'True',
        isCorrect: false,
        questionId: '8b299762-0da7-11f0-9d07-325096b39f50',
      },
      {
        id: 'h2',
        text: 'False',
        isCorrect: true,
        questionId: '8b299762-0da7-11f0-9d07-325096b39f50',
      },

      {
        id: 'i1',
        text: 'net',
        isCorrect: true,
        questionId: '8b299762-0da7-11f0-9d07-325096b39f51',
      },

      {
        id: 'j1',
        text: '1946',
        isCorrect: true,
        questionId: '8b299762-0da7-11f0-9d07-325096b39f52',
      },
      {
        id: 'j2',
        text: '1950',
        isCorrect: false,
        questionId: '8b299762-0da7-11f0-9d07-325096b39f52',
      },
      {
        id: 'j3',
        text: '1938',
        isCorrect: false,
        questionId: '8b299762-0da7-11f0-9d07-325096b39f52',
      },
      {
        id: 'j4',
        text: '1962',
        isCorrect: false,
        questionId: '8b299762-0da7-11f0-9d07-325096b39f52',
      },

      // Ultimate General Knowledge
      {
        id: '1a',
        text: 'Sydney',
        isCorrect: false,
        questionId: '8b299762-0da7-11f0-9d07-325096b39f53',
      },
      {
        id: '2a',
        text: 'Melbourne',
        isCorrect: false,
        questionId: '8b299762-0da7-11f0-9d07-325096b39f53',
      },
      {
        id: '3a',
        text: 'Canberra',
        isCorrect: true,
        questionId: '8b299762-0da7-11f0-9d07-325096b39f53',
      },
      {
        id: '4a',
        text: 'Brisbane',
        isCorrect: false,
        questionId: '8b299762-0da7-11f0-9d07-325096b39f53',
      },

      {
        id: '5a',
        text: '5',
        isCorrect: false,
        questionId: '8b299762-0da7-11f0-9d07-325096b39f54',
      },
      {
        id: '6a',
        text: '6',
        isCorrect: false,
        questionId: '8b299762-0da7-11f0-9d07-325096b39f54',
      },
      {
        id: '7a',
        text: '7',
        isCorrect: true,
        questionId: '8b299762-0da7-11f0-9d07-325096b39f54',
      },
      {
        id: '8a',
        text: '8',
        isCorrect: false,
        questionId: '8b299762-0da7-11f0-9d07-325096b39f54',
      },

      {
        id: '9a',
        text: 'True',
        isCorrect: false,
        questionId: '8b299762-0da7-11f0-9d07-325096b39f55',
      },
      {
        id: '10a',
        text: 'False',
        isCorrect: true,
        questionId: '8b299762-0da7-11f0-9d07-325096b39f55',
      },

      {
        id: '11a',
        text: 'worm',
        isCorrect: true,
        questionId: '8b299762-0da7-11f0-9d07-325096b39f56',
      },

      {
        id: '12a',
        text: 'Venus',
        isCorrect: false,
        questionId: '8b299762-0da7-11f0-9d07-325096b39f57',
      },
      {
        id: '13a',
        text: 'Earth',
        isCorrect: false,
        questionId: '8b299762-0da7-11f0-9d07-325096b39f57',
      },
      {
        id: '14a',
        text: 'Mercury',
        isCorrect: true,
        questionId: '8b299762-0da7-11f0-9d07-325096b39f57',
      },
      {
        id: '15a',
        text: 'Mars',
        isCorrect: false,
        questionId: '8b299762-0da7-11f0-9d07-325096b39f57',
      },

      // World History Quiz
      {
        id: '16a',
        text: '1943',
        isCorrect: false,
        questionId: 'a2a66668-0da7-11f0-bf7a-325096b39f62',
      },
      {
        id: '17a',
        text: '1944',
        isCorrect: false,
        questionId: 'a2a66668-0da7-11f0-bf7a-325096b39f62',
      },
      {
        id: '18a',
        text: '1945',
        isCorrect: true,
        questionId: 'a2a66668-0da7-11f0-bf7a-325096b39f62',
      },
      {
        id: '19a',
        text: '1946',
        isCorrect: false,
        questionId: 'a2a66668-0da7-11f0-bf7a-325096b39f62',
      },

      {
        id: '20a',
        text: 'Thomas Jefferson',
        isCorrect: false,
        questionId: 'a2a66668-0da7-11f0-bf7a-325096b39f63',
      },
      {
        id: '21a',
        text: 'George Washington',
        isCorrect: true,
        questionId: 'a2a66668-0da7-11f0-bf7a-325096b39f63',
      },
      {
        id: '22a',
        text: 'Abraham Lincoln',
        isCorrect: false,
        questionId: 'a2a66668-0da7-11f0-bf7a-325096b39f63',
      },
      {
        id: '23a',
        text: 'John Adams',
        isCorrect: false,
        questionId: 'a2a66668-0da7-11f0-bf7a-325096b39f63',
      },

      {
        id: '24a',
        text: 'True',
        isCorrect: true,
        questionId: 'a2a66668-0da7-11f0-bf7a-325096b39f64',
      },
      {
        id: '25a',
        text: 'False',
        isCorrect: false,
        questionId: 'a2a66668-0da7-11f0-bf7a-325096b39f64',
      },

      {
        id: '26a',
        text: 'China',
        isCorrect: true,
        questionId: 'a2a66668-0da7-11f0-bf7a-325096b39f65',
      },

      {
        id: '27a',
        text: '1776',
        isCorrect: false,
        questionId: 'a2a66668-0da7-11f0-bf7a-325096b39f66',
      },
      {
        id: '28a',
        text: '1789',
        isCorrect: true,
        questionId: 'a2a66668-0da7-11f0-bf7a-325096b39f66',
      },
      {
        id: '29a',
        text: '1804',
        isCorrect: false,
        questionId: 'a2a66668-0da7-11f0-bf7a-325096b39f66',
      },
      {
        id: '30a',
        text: '1812',
        isCorrect: false,
        questionId: 'a2a66668-0da7-11f0-bf7a-325096b39f66',
      },

      // Geography Explorer
      {
        id: '31a',
        text: 'Africa',
        isCorrect: false,
        questionId: 'a2a66668-0da7-11f0-bf7a-325096b39f67',
      },
      {
        id: '32a',
        text: 'Asia',
        isCorrect: true,
        questionId: 'a2a66668-0da7-11f0-bf7a-325096b39f67',
      },
      {
        id: '33a',
        text: 'North America',
        isCorrect: false,
        questionId: 'a2a66668-0da7-11f0-bf7a-325096b39f67',
      },
      {
        id: '34a',
        text: 'Europe',
        isCorrect: false,
        questionId: 'a2a66668-0da7-11f0-bf7a-325096b39f67',
      },

      {
        id: '35a',
        text: 'Atlantic Ocean',
        isCorrect: false,
        questionId: 'a2a66668-0da7-11f0-bf7a-325096b39f68',
      },
      {
        id: '36a',
        text: 'Indian Ocean',
        isCorrect: false,
        questionId: 'a2a66668-0da7-11f0-bf7a-325096b39f68',
      },
      {
        id: '37a',
        text: 'Pacific Ocean',
        isCorrect: true,
        questionId: 'a2a66668-0da7-11f0-bf7a-325096b39f68',
      },
      {
        id: '38a',
        text: 'Arctic Ocean',
        isCorrect: false,
        questionId: 'a2a66668-0da7-11f0-bf7a-325096b39f68',
      },

      {
        id: '39a',
        text: 'True',
        isCorrect: false,
        questionId: 'a2a66668-0da7-11f0-bf7a-325096b39f69',
      },
      {
        id: '40a',
        text: 'False',
        isCorrect: true,
        questionId: 'a2a66668-0da7-11f0-bf7a-325096b39f69',
      },

      {
        id: '41a',
        text: 'Nepal',
        isCorrect: true,
        questionId: 'a2a66668-0da7-11f0-bf7a-325096b39f70',
      },
      {
        id: '42a',
        text: 'Tibet',
        isCorrect: false,
        questionId: 'a2a66668-0da7-11f0-bf7a-325096b39f70',
      },
      {
        id: '43a',
        text: 'China',
        isCorrect: false,
        questionId: 'a2a66668-0da7-11f0-bf7a-325096b39f70',
      },

      {
        id: '44a',
        text: 'Sahara',
        isCorrect: true,
        questionId: 'a2a66668-0da7-11f0-bf7a-325096b39f71',
      },
      {
        id: '45a',
        text: 'Atacama',
        isCorrect: false,
        questionId: 'a2a66668-0da7-11f0-bf7a-325096b39f71',
      },
      {
        id: '46a',
        text: 'Kalahari',
        isCorrect: false,
        questionId: 'a2a66668-0da7-11f0-bf7a-325096b39f71',
      },
      {
        id: '47a',
        text: 'Gobi',
        isCorrect: false,
        questionId: 'a2a66668-0da7-11f0-bf7a-325096b39f71',
      },

      // Capital Cities Quiz
      {
        id: '48a',
        text: 'Vancouver',
        isCorrect: false,
        questionId: 'a2a66668-0da7-11f0-bf7a-325096b39f72',
      },
      {
        id: '49a',
        text: 'Ottawa',
        isCorrect: true,
        questionId: 'a2a66668-0da7-11f0-bf7a-325096b39f72',
      },
      {
        id: '50a',
        text: 'Toronto',
        isCorrect: false,
        questionId: 'a2a66668-0da7-11f0-bf7a-325096b39f72',
      },
      {
        id: '51a',
        text: 'Montreal',
        isCorrect: false,
        questionId: 'a2a66668-0da7-11f0-bf7a-325096b39f72',
      },

      {
        id: '52a',
        text: 'Rio de Janeiro',
        isCorrect: false,
        questionId: 'a2a66668-0da7-11f0-bf7a-325096b39f73',
      },
      {
        id: '53a',
        text: 'Brasília',
        isCorrect: true,
        questionId: 'a2a66668-0da7-11f0-bf7a-325096b39f73',
      },
      {
        id: '54a',
        text: 'São Paulo',
        isCorrect: false,
        questionId: 'a2a66668-0da7-11f0-bf7a-325096b39f73',
      },
      {
        id: '55a',
        text: 'Salvador',
        isCorrect: false,
        questionId: 'a2a66668-0da7-11f0-bf7a-325096b39f73',
      },

      {
        id: '56a',
        text: 'True',
        isCorrect: false,
        questionId: 'a2a66668-0da7-11f0-bf7a-325096b39f74',
      },
      {
        id: '57a',
        text: 'False',
        isCorrect: true,
        questionId: 'a2a66668-0da7-11f0-bf7a-325096b39f74',
      },

      {
        id: '58a',
        text: 'Beijing',
        isCorrect: true,
        questionId: 'a2a66668-0da7-11f0-bf7a-325096b39f75',
      },
      {
        id: '59a',
        text: 'Tokyo',
        isCorrect: false,
        questionId: 'a2a66668-0da7-11f0-bf7a-325096b39f75',
      },
      {
        id: '60a',
        text: 'Seoul',
        isCorrect: false,
        questionId: 'a2a66668-0da7-11f0-bf7a-325096b39f75',
      },

      {
        id: '61a',
        text: 'Egypt',
        isCorrect: true,
        questionId: 'a2a66668-0da7-11f0-bf7a-325096b39f76',
      },
      {
        id: '62a',
        text: 'Saudi Arabia',
        isCorrect: false,
        questionId: 'a2a66668-0da7-11f0-bf7a-325096b39f76',
      },
      {
        id: '63a',
        text: 'Jordan',
        isCorrect: false,
        questionId: 'a2a66668-0da7-11f0-bf7a-325096b39f76',
      },
      {
        id: '64a',
        text: 'Morocco',
        isCorrect: false,
        questionId: 'a2a66668-0da7-11f0-bf7a-325096b39f76',
      },
    ],
  });

  await prisma.userQuizResult.createMany({
    data: [
      {
        id: '2045bf9a-0daf-11f0-a26c-325096b39f47',
        score: 5,
        quizId: '1a2b3c4d-0da7-11f0-bd5b-325096b39f47', // Football Quiz
        userId: '5252edde-0da8-11f0-9169-325096b39f47',
      },
      {
        id: '2045bf9a-0daf-11f0-a26c-325096b39f48',
        score: 3,
        quizId: '1a2b3c4d-0da7-11f0-bd5b-325096b39f47', // Football Quiz
        userId: '6a7b8c9d-0da8-11f0-bd5b-325096b39f47',
      },
      {
        id: '2045bf9a-0daf-11f0-a26c-325096b39f49',
        score: 4,
        quizId: '1a2b3c4d-0da7-11f0-bd5b-325096b39f47', // Football Quiz
        userId: '7b8c9d0e-0da8-11f0-bd5b-325096b39f47',
      },
      {
        id: '2045bf9a-0daf-11f0-a26c-325096b39f50',
        score: 4,
        quizId: '8b299762-0da7-11f0-9d07-325096b39f48', // General Knowledge Quiz
        userId: '5252edde-0da8-11f0-9169-325096b39f47',
      },
      {
        id: '2045bf9a-0daf-11f0-a26c-325096b39f51',
        score: 5,
        quizId: 'c7f5b8e4-0da7-11f0-bd9b-325096b39f47', //Geography Quiz
        userId: '5252edde-0da8-11f0-9169-325096b39f47',
      },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
