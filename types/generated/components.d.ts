import type { Schema, Struct } from '@strapi/strapi';

export interface ChallengeDataColorPerceptionGame
  extends Struct.ComponentSchema {
  collectionName: 'components_challenge_data_color_perception_games';
  info: {
    description: '';
    displayName: 'COLOR_PERCEPTION_GAME';
  };
  attributes: {
    explanation: Schema.Attribute.Component<'data.explanation', false>;
    question: Schema.Attribute.Component<'data.question', true>;
  };
}

export interface ChallengeDataFillInTheBlanks extends Struct.ComponentSchema {
  collectionName: 'components_challenge_data_fill_in_the_blanks';
  info: {
    description: '';
    displayName: 'FILL_IN_THE_BLANKS';
  };
  attributes: {
    correctAnswerByOrder: Schema.Attribute.Component<'data.question', true>;
    explanation: Schema.Attribute.Component<'data.explanation', false>;
    question: Schema.Attribute.Component<'data.question', true>;
    text: Schema.Attribute.Text;
  };
}

export interface ChallengeDataFindTheIntruder extends Struct.ComponentSchema {
  collectionName: 'components_challenge_data_find_the_intruders';
  info: {
    displayName: 'FIND_THE_INTRUDER';
  };
  attributes: {
    correctWord: Schema.Attribute.String;
    explanation: Schema.Attribute.Component<'data.explanation', false>;
    question: Schema.Attribute.Component<'data.question', true>;
    wordsToChoice: Schema.Attribute.Component<'data.question', true>;
  };
}

export interface ChallengeDataFindingError extends Struct.ComponentSchema {
  collectionName: 'components_challenge_data_finding_errors';
  info: {
    displayName: 'FINDING_ERROR';
  };
  attributes: {
    error: Schema.Attribute.String;
    explanation: Schema.Attribute.Component<'data.explanation', false>;
    question: Schema.Attribute.Component<'data.question', true>;
    sentence: Schema.Attribute.Text;
  };
}

export interface ChallengeDataImageToCaption extends Struct.ComponentSchema {
  collectionName: 'components_challenge_data_image_to_captions';
  info: {
    description: '';
    displayName: 'IMAGE_TO_CAPTION';
  };
  attributes: {
    explanation: Schema.Attribute.Component<'data.explanation', false>;
    options: Schema.Attribute.Component<'data.option', false>;
    question: Schema.Attribute.Component<'data.question', true>;
  };
}

export interface ChallengeDataInputTextOpen extends Struct.ComponentSchema {
  collectionName: 'components_challenge_data_input_text_opens';
  info: {
    displayName: 'INPUT_TEXT_OPEN';
  };
  attributes: {
    explanation: Schema.Attribute.Component<'data.explanation', false>;
    options: Schema.Attribute.Component<'data.option', true>;
    question: Schema.Attribute.Component<'data.question', true>;
  };
}

export interface ChallengeDataMatchingGame extends Struct.ComponentSchema {
  collectionName: 'components_challenge_data_matching_games';
  info: {
    description: '';
    displayName: 'MATCHING_GAME';
  };
  attributes: {
    explanation: Schema.Attribute.Component<'data.explanation', false>;
    game: Schema.Attribute.Component<'data.game', true>;
    question: Schema.Attribute.Component<'data.question', true>;
  };
}

export interface ChallengeDataMixedQuotes extends Struct.ComponentSchema {
  collectionName: 'components_challenge_data_mixed_quotes';
  info: {
    displayName: 'MIXED_QUOTES';
  };
  attributes: {
    correctOrder: Schema.Attribute.Component<'data.question', true>;
    question: Schema.Attribute.Component<'data.question', true>;
    shuffledWords: Schema.Attribute.Component<'data.question', true>;
  };
}

export interface ChallengeDataPercentageQuestion
  extends Struct.ComponentSchema {
  collectionName: 'components_challenge_data_percentage_questions';
  info: {
    description: '';
    displayName: 'PERCENTAGE_QUESTION';
  };
  attributes: {
    answer: Schema.Attribute.Integer;
    explanation: Schema.Attribute.Component<'data.explanation', false>;
    question: Schema.Attribute.Component<'data.question', true>;
  };
}

export interface ChallengeDataPuzzle extends Struct.ComponentSchema {
  collectionName: 'components_challenge_data_puzzles';
  info: {
    description: '';
    displayName: 'PUZZLE';
  };
  attributes: {
    explanation: Schema.Attribute.Component<'data.explanation', false>;
    image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    question: Schema.Attribute.Component<'data.question', true>;
  };
}

export interface ChallengeDataSelectOneVisual extends Struct.ComponentSchema {
  collectionName: 'components_challenge_data_select_one_visuals';
  info: {
    displayName: 'SELECT_ONE_VISUAL';
    icon: 'archive';
  };
  attributes: {
    explanation: Schema.Attribute.Component<'data.explanation', false>;
    options: Schema.Attribute.Component<'data.option', true>;
    question: Schema.Attribute.Component<'data.question', true>;
  };
}

export interface ChallengeDataSelectOneWithCharacter
  extends Struct.ComponentSchema {
  collectionName: 'components_challenge_data_select_one_with_characters';
  info: {
    description: '';
    displayName: 'SELECT_ONE_WITH_CHARACTER';
  };
  attributes: {
    explanation: Schema.Attribute.Component<'data.explanation', false>;
    image: Schema.Attribute.Media<'images'>;
    imageAlt: Schema.Attribute.String;
    options: Schema.Attribute.Component<'data.option', true>;
    question: Schema.Attribute.Component<'data.question', true>;
  };
}

export interface ChallengeDataShortAnswerQuestion
  extends Struct.ComponentSchema {
  collectionName: 'components_challenge_data_short_answer_questions';
  info: {
    displayName: 'SHORT_ANSWER_QUESTION';
  };
  attributes: {
    answer: Schema.Attribute.Text;
    explanation: Schema.Attribute.Component<'data.explanation', false>;
    question: Schema.Attribute.Component<'data.question', true>;
  };
}

export interface ChallengeDataSortingGame extends Struct.ComponentSchema {
  collectionName: 'components_challenge_data_sorting_games';
  info: {
    description: '';
    displayName: 'SORTING_GAME';
  };
  attributes: {
    explanation: Schema.Attribute.Component<'data.explanation', false>;
    image: Schema.Attribute.Media<'images'>;
    options: Schema.Attribute.Component<'data.option', true>;
    question: Schema.Attribute.Component<'data.question', true>;
  };
}

export interface ChallengeDataVideo extends Struct.ComponentSchema {
  collectionName: 'components_challenge_data_videos';
  info: {
    displayName: 'VIDEO';
  };
  attributes: {
    question: Schema.Attribute.Component<'data.question', true>;
    video: Schema.Attribute.Media<'videos'>;
  };
}

export interface ChallengeDataWordSearch extends Struct.ComponentSchema {
  collectionName: 'components_challenge_data_word_searches';
  info: {
    description: '';
    displayName: 'WORD_SEARCH';
  };
  attributes: {
    explanation: Schema.Attribute.Component<'data.explanation', false>;
    game: Schema.Attribute.Component<'data.game-word', false>;
    question: Schema.Attribute.Component<'data.question', true>;
  };
}

export interface ChallengeDataWordle extends Struct.ComponentSchema {
  collectionName: 'components_challenge_data_wordles';
  info: {
    description: '';
    displayName: 'WORDLE';
  };
  attributes: {
    explanation: Schema.Attribute.Component<'data.explanation', false>;
    question: Schema.Attribute.Component<'data.question', true>;
    wordbank: Schema.Attribute.Component<'data.question', true>;
  };
}

export interface DataExplanation extends Struct.ComponentSchema {
  collectionName: 'components_data_explanations';
  info: {
    description: '';
    displayName: 'explanation';
    icon: 'chartCircle';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files'>;
    paragraphs: Schema.Attribute.Component<'data.question', true>;
    video: Schema.Attribute.Media<'videos'>;
  };
}

export interface DataGame extends Struct.ComponentSchema {
  collectionName: 'components_data_games';
  info: {
    description: '';
    displayName: 'Game';
    icon: 'puzzle';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    left: Schema.Attribute.String;
    leftId: Schema.Attribute.BigInteger;
    right: Schema.Attribute.String;
    rightId: Schema.Attribute.BigInteger;
  };
}

export interface DataGameWord extends Struct.ComponentSchema {
  collectionName: 'components_data_game_words';
  info: {
    description: '';
    displayName: 'game_word';
  };
  attributes: {
    gridPCLarge: Schema.Attribute.Component<'data.question', true>;
    gridPhoneMedium: Schema.Attribute.Component<'data.question', true>;
    gridPhoneSmall: Schema.Attribute.Component<'data.question', true>;
    gridTablet: Schema.Attribute.Component<'data.question', true>;
    heightGrid: Schema.Attribute.Integer;
    widthGrid: Schema.Attribute.Integer;
    wordSearch: Schema.Attribute.Component<'data.question', true>;
  };
}

export interface DataOption extends Struct.ComponentSchema {
  collectionName: 'components_data_options';
  info: {
    description: '';
    displayName: 'option';
    icon: 'apps';
  };
  attributes: {
    answer: Schema.Attribute.String;
    correct: Schema.Attribute.Boolean;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    text: Schema.Attribute.Text;
  };
}

export interface DataQuestion extends Struct.ComponentSchema {
  collectionName: 'components_data_questions';
  info: {
    description: '';
    displayName: 'array_string_values';
    icon: 'question';
  };
  attributes: {
    value: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'challenge-data.color-perception-game': ChallengeDataColorPerceptionGame;
      'challenge-data.fill-in-the-blanks': ChallengeDataFillInTheBlanks;
      'challenge-data.find-the-intruder': ChallengeDataFindTheIntruder;
      'challenge-data.finding-error': ChallengeDataFindingError;
      'challenge-data.image-to-caption': ChallengeDataImageToCaption;
      'challenge-data.input-text-open': ChallengeDataInputTextOpen;
      'challenge-data.matching-game': ChallengeDataMatchingGame;
      'challenge-data.mixed-quotes': ChallengeDataMixedQuotes;
      'challenge-data.percentage-question': ChallengeDataPercentageQuestion;
      'challenge-data.puzzle': ChallengeDataPuzzle;
      'challenge-data.select-one-visual': ChallengeDataSelectOneVisual;
      'challenge-data.select-one-with-character': ChallengeDataSelectOneWithCharacter;
      'challenge-data.short-answer-question': ChallengeDataShortAnswerQuestion;
      'challenge-data.sorting-game': ChallengeDataSortingGame;
      'challenge-data.video': ChallengeDataVideo;
      'challenge-data.word-search': ChallengeDataWordSearch;
      'challenge-data.wordle': ChallengeDataWordle;
      'data.explanation': DataExplanation;
      'data.game': DataGame;
      'data.game-word': DataGameWord;
      'data.option': DataOption;
      'data.question': DataQuestion;
    }
  }
}
