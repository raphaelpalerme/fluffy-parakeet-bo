import type { Struct, Schema } from '@strapi/strapi';

export interface DataQuestion extends Struct.ComponentSchema {
  collectionName: 'components_data_questions';
  info: {
    displayName: 'array_string_values';
    icon: 'question';
    description: '';
  };
  attributes: {
    value: Schema.Attribute.Text;
  };
}

export interface DataOption extends Struct.ComponentSchema {
  collectionName: 'components_data_options';
  info: {
    displayName: 'option';
    icon: 'apps';
    description: '';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    description: Schema.Attribute.Text;
    answer: Schema.Attribute.String;
    correct: Schema.Attribute.Boolean;
    text: Schema.Attribute.Text;
  };
}

export interface DataGame extends Struct.ComponentSchema {
  collectionName: 'components_data_games';
  info: {
    displayName: 'Game';
    icon: 'puzzle';
    description: '';
  };
  attributes: {
    left: Schema.Attribute.String;
    right: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    leftId: Schema.Attribute.BigInteger;
    rightId: Schema.Attribute.BigInteger;
  };
}

export interface DataGameWord extends Struct.ComponentSchema {
  collectionName: 'components_data_game_words';
  info: {
    displayName: 'game_word';
    description: '';
  };
  attributes: {
    wordSearch: Schema.Attribute.Component<'data.question', true>;
    widthGrid: Schema.Attribute.Integer;
    heightGrid: Schema.Attribute.Integer;
    gridPhoneSmall: Schema.Attribute.Component<'data.question', true>;
    gridPhoneMedium: Schema.Attribute.Component<'data.question', true>;
    gridTablet: Schema.Attribute.Component<'data.question', true>;
    gridPCLarge: Schema.Attribute.Component<'data.question', true>;
  };
}

export interface DataExplanation extends Struct.ComponentSchema {
  collectionName: 'components_data_explanations';
  info: {
    displayName: 'explanation';
    icon: 'chartCircle';
    description: '';
  };
  attributes: {
    paragraphs: Schema.Attribute.Component<'data.question', true>;
    video: Schema.Attribute.Media<'videos'>;
  };
}

export interface ChallengeDataWordSearch extends Struct.ComponentSchema {
  collectionName: 'components_challenge_data_word_searches';
  info: {
    displayName: 'WORD_SEARCH';
    description: '';
  };
  attributes: {
    question: Schema.Attribute.Component<'data.question', true>;
    game: Schema.Attribute.Component<'data.game-word', false>;
    explanation: Schema.Attribute.Component<'data.explanation', false>;
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

export interface ChallengeDataSortingGame extends Struct.ComponentSchema {
  collectionName: 'components_challenge_data_sorting_games';
  info: {
    displayName: 'SORTING_GAME';
    description: '';
  };
  attributes: {
    question: Schema.Attribute.Component<'data.question', true>;
    options: Schema.Attribute.Component<'data.option', true>;
    image: Schema.Attribute.Media<'images'>;
    explanation: Schema.Attribute.Component<'data.explanation', false>;
  };
}

export interface ChallengeDataShortAnswerQuestion
  extends Struct.ComponentSchema {
  collectionName: 'components_challenge_data_short_answer_questions';
  info: {
    displayName: 'SHORT_ANSWER_QUESTION';
  };
  attributes: {
    question: Schema.Attribute.Component<'data.question', true>;
    answer: Schema.Attribute.Text;
    explanation: Schema.Attribute.Component<'data.explanation', false>;
  };
}

export interface ChallengeDataSelectOneWithCharacter
  extends Struct.ComponentSchema {
  collectionName: 'components_challenge_data_select_one_with_characters';
  info: {
    displayName: 'SELECT_ONE_WITH_CHARACTER';
    description: '';
  };
  attributes: {
    options: Schema.Attribute.Component<'data.option', true>;
    imageAlt: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    question: Schema.Attribute.Component<'data.question', true>;
    explanation: Schema.Attribute.Component<'data.explanation', false>;
  };
}

export interface ChallengeDataSelectOneVisual extends Struct.ComponentSchema {
  collectionName: 'components_challenge_data_select_one_visuals';
  info: {
    displayName: 'SELECT_ONE_VISUAL';
    icon: 'archive';
  };
  attributes: {
    question: Schema.Attribute.Component<'data.question', true>;
    options: Schema.Attribute.Component<'data.option', true>;
    explanation: Schema.Attribute.Component<'data.explanation', false>;
  };
}

export interface ChallengeDataPercentageQuestion
  extends Struct.ComponentSchema {
  collectionName: 'components_challenge_data_percentage_questions';
  info: {
    displayName: 'PERCENTAGE_QUESTION';
    description: '';
  };
  attributes: {
    question: Schema.Attribute.Component<'data.question', true>;
    explanation: Schema.Attribute.Component<'data.explanation', false>;
    answer: Schema.Attribute.Integer;
  };
}

export interface ChallengeDataMixedQuotes extends Struct.ComponentSchema {
  collectionName: 'components_challenge_data_mixed_quotes';
  info: {
    displayName: 'MIXED_QUOTES';
  };
  attributes: {
    question: Schema.Attribute.Component<'data.question', true>;
    shuffledWords: Schema.Attribute.Component<'data.question', true>;
    correctOrder: Schema.Attribute.Component<'data.question', true>;
  };
}

export interface ChallengeDataMatchingGame extends Struct.ComponentSchema {
  collectionName: 'components_challenge_data_matching_games';
  info: {
    displayName: 'MATCHING_GAME';
    description: '';
  };
  attributes: {
    question: Schema.Attribute.Component<'data.question', true>;
    explanation: Schema.Attribute.Component<'data.explanation', false>;
    game: Schema.Attribute.Component<'data.game', true>;
  };
}

export interface ChallengeDataInputTextOpen extends Struct.ComponentSchema {
  collectionName: 'components_challenge_data_input_text_opens';
  info: {
    displayName: 'INPUT_TEXT_OPEN';
  };
  attributes: {
    question: Schema.Attribute.Component<'data.question', true>;
    options: Schema.Attribute.Component<'data.option', true>;
    explanation: Schema.Attribute.Component<'data.explanation', false>;
  };
}

export interface ChallengeDataImageToCaption extends Struct.ComponentSchema {
  collectionName: 'components_challenge_data_image_to_captions';
  info: {
    displayName: 'IMAGE_TO_CAPTION';
    description: '';
  };
  attributes: {
    question: Schema.Attribute.Component<'data.question', true>;
    options: Schema.Attribute.Component<'data.option', false>;
    explanation: Schema.Attribute.Component<'data.explanation', false>;
  };
}

export interface ChallengeDataFindingError extends Struct.ComponentSchema {
  collectionName: 'components_challenge_data_finding_errors';
  info: {
    displayName: 'FINDING_ERROR';
  };
  attributes: {
    question: Schema.Attribute.Component<'data.question', true>;
    sentence: Schema.Attribute.Text;
    error: Schema.Attribute.String;
    explanation: Schema.Attribute.Component<'data.explanation', false>;
  };
}

export interface ChallengeDataFindTheIntruder extends Struct.ComponentSchema {
  collectionName: 'components_challenge_data_find_the_intruders';
  info: {
    displayName: 'FIND_THE_INTRUDER';
  };
  attributes: {
    question: Schema.Attribute.Component<'data.question', true>;
    wordsToChoice: Schema.Attribute.Component<'data.question', true>;
    correctWord: Schema.Attribute.String;
    explanation: Schema.Attribute.Component<'data.explanation', false>;
  };
}

export interface ChallengeDataFillInTheBlanks extends Struct.ComponentSchema {
  collectionName: 'components_challenge_data_fill_in_the_blanks';
  info: {
    displayName: 'FILL_IN_THE_BLANKS';
    description: '';
  };
  attributes: {
    question: Schema.Attribute.Component<'data.question', true>;
    text: Schema.Attribute.Text;
    correctAnswerByOrder: Schema.Attribute.Component<'data.question', true>;
    explanation: Schema.Attribute.Component<'data.explanation', false>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'data.question': DataQuestion;
      'data.option': DataOption;
      'data.game': DataGame;
      'data.game-word': DataGameWord;
      'data.explanation': DataExplanation;
      'challenge-data.word-search': ChallengeDataWordSearch;
      'challenge-data.video': ChallengeDataVideo;
      'challenge-data.sorting-game': ChallengeDataSortingGame;
      'challenge-data.short-answer-question': ChallengeDataShortAnswerQuestion;
      'challenge-data.select-one-with-character': ChallengeDataSelectOneWithCharacter;
      'challenge-data.select-one-visual': ChallengeDataSelectOneVisual;
      'challenge-data.percentage-question': ChallengeDataPercentageQuestion;
      'challenge-data.mixed-quotes': ChallengeDataMixedQuotes;
      'challenge-data.matching-game': ChallengeDataMatchingGame;
      'challenge-data.input-text-open': ChallengeDataInputTextOpen;
      'challenge-data.image-to-caption': ChallengeDataImageToCaption;
      'challenge-data.finding-error': ChallengeDataFindingError;
      'challenge-data.find-the-intruder': ChallengeDataFindTheIntruder;
      'challenge-data.fill-in-the-blanks': ChallengeDataFillInTheBlanks;
    }
  }
}
