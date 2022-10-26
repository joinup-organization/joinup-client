/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { useEffect, useState } from 'react'
import { AnswerLi } from '../../components/AnswerLi/AnswerLi.component'
import { MainTitle } from '../../global.style'
import { IAnswer } from '../../model/answers.model'
import { getAnswers } from '../../services/answers.service'
import { AuthService } from '../../services/auth.service'
import { AnswersContainer, AnswersList } from './Answers.style'

export const Answers = () => {
  const [answers, setAnswers] = useState<IAnswer[]>([])
  const authService = new AuthService()
  const userId = authService.getCurrentUser?.uid

  useEffect(() => {
    const get = async () => {
      setAnswers(await getAnswers(userId!))
    }
    get()
  }, [])

  return (
        <AnswersContainer>
          <MainTitle>Respostas</MainTitle>
          <AnswersList>
            {(answers.length > 0) ? answers.map((answer, key) => <AnswerLi {...answer} key={key}/>) : null}
          </AnswersList>
        </AnswersContainer>
  )
}
