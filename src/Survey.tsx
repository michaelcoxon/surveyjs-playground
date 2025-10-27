'use client';

import { useMemo } from 'react';
import 'survey-core/survey-core.css';
import { Survey } from 'survey-react-ui';
import SurveyService from './SurveyService';


export default function SurveyComponent()
{
    const survey = useMemo(()=> SurveyService.createModel(),[]);    

    return (
        <Survey model={survey} />
    );
}