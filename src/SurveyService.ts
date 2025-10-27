import { Model, Serializer, SurveyModel } from 'survey-core';
import surveyJson from './MySurveyModel';
import { isDateQuestion } from './helpers/QuestionGuards/isDateQuestion';
import { isTextQuestion } from './helpers/QuestionGuards/isTextQuestion';
import { onValueChangingCastStringDateToNativeDate } from './helpers/onValueChangingCastStringDateToNativeDate';


export default class SurveyService
{
    public static createModel(): Model
    {
        const model = new Model(surveyJson);

        // wire up events
        model.onComplete.add(SurveyService.onSurveyComplete);
        model.onValueChanging.add(onValueChangingCastStringDateToNativeDate);

        // dump surveyJson schema out to console
        console.log(Serializer.generateSchema());

        return model;
    }

    private static onSurveyComplete = (survey: SurveyModel/*, options: CompleteEvent*/) =>
    {
        const userId = 1;
        const surveyId = 1;
        survey.setValue("userId", userId);

        SurveyService.saveSurveyResults(
            "/_api/Survey/" + surveyId,
            survey.data
        );
    };

    private static saveSurveyResults(url: string, json: object)
    {
        console.info(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body: JSON.stringify(json),
        });
    }
}

