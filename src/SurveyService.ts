import { Model, Question, QuestionTextModel, Serializer, SurveyModel, type ValueChangingEvent } from 'survey-core';
import surveyJson from './MySurveyModel';


export default class SurveyService
{
    public static createModel(): Model
    {
        const model = new Model(surveyJson);

        // wire up events
        model.onComplete.add(SurveyService.onSurveyComplete);
        model.onValueChanging.add(SurveyService.onInputDateValueChanging);

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

    private static onInputDateValueChanging = function (_sender: SurveyModel, options: ValueChangingEvent)
    {
        if (isDateQuestion(options.question) && typeof options.value === "string")
        {
            options.value = new Date(options.value);
        }
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

function isTextQuestion(question?: Question): question is QuestionTextModel
{
    return question?.getType() == 'text';
}

function isDateQuestion(question?: Question): question is QuestionTextModel
{
    return isTextQuestion(question) && question.inputType === "date";
}