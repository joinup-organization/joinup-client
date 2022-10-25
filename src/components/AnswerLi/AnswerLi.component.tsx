import React from 'react'
import { Text } from '../../global.style'
import { IAnswer } from '../../model/answers.model'
import { AnswersLiContainer, Content, DateContainer, DateText, EnterpriseProject, Message } from './AnswerLi.style'
import { format } from 'date-fns'

export const AnswerLi = (answer: IAnswer) => {
  return (
        <AnswersLiContainer>
            <Content>
                <Text>{answer.vacancy.name}</Text>
                <EnterpriseProject>
                    {answer.enterprise.name} / {answer.project.name}
                </EnterpriseProject>
                <Message>{answer.message}</Message>
            </Content>
            <DateContainer>
                <DateText>{format(new Date(answer.sentAt), 'dd/MM')}</DateText>
            </DateContainer>
        </AnswersLiContainer>
  )
}
