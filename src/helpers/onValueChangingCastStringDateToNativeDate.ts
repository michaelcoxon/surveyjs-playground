import type { ValueChangingEvent } from 'survey-core';
import type { SurveyModel } from 'survey-react-ui';
import { isTextQuestionWithInputType } from './QuestionGuards/isTextQuestionWithInputType';

/**
 * when setting the a date value back to the data collection in the model, write it as a @see Date object
 * @example model.onValueChanging.add(onValueChangingCastStringDateToNativeDate);
 * @param _sender 
 * @param options 
 */
export function onValueChangingCastStringDateToNativeDate(_sender: SurveyModel, options: ValueChangingEvent): void
{
    if (isTextQuestionWithInputType(options.question, 'date') &&
        (
            // check for valid valaues for the data constructor.
            // this should handle null or undefined too
            typeof options.value === "string"
            || typeof options.value === "number"
        ))
    {
        // set the date value on the model to 
        // one that kiota can work with.
        options.value = new Date(options.value);
    }
}
