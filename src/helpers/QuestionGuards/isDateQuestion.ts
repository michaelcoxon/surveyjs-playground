import type { Question, QuestionTextModel } from 'survey-core';
import { isTextQuestionWithInputType } from './isTextQuestionWithInputType';

export function isDateQuestion(question?: Question): question is QuestionTextModel
{
    return isTextQuestionWithInputType(question, "date");
}
