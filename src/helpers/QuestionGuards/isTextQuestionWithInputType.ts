import type { Question, QuestionTextModel } from 'survey-core';
import { isTextQuestion } from './isTextQuestion';

type InputType =
    | "button"
    | "checkbox"
    | "color"
    | "date"
    | "datetime-local"
    | "email"
    | "file"
    | "hidden"
    | "image"
    | "month"
    | "number"
    | "password"
    | "radio"
    | "range"
    | "reset"
    | "search"
    | "submit"
    | "tel"
    | "text"
    | "time"
    | "url"
    | "week";

export function isTextQuestionWithInputType(question?: Question, inputType?: InputType): question is QuestionTextModel
{
    if (isTextQuestion(question))
    {
        if (inputType)
        {
            return question.inputType == inputType;
        }
        else
        {
            return true;
        }
    }
    return false;
}
