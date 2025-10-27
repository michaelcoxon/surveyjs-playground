import type { Question, QuestionTextModel } from 'survey-core';

export function isTextQuestion(question?: Question): question is QuestionTextModel
{
    return question?.getType() == 'text';
}
