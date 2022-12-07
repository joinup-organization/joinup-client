/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { format } from 'date-fns'
import React, { useEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router'
import { EnterpriseInline } from '../../components/EnterpriseInline/EnterpriseInline.component'
import HeaderNav from '../../components/HeaderNav/HeaderNav.component'
import { IAnswer } from '../../model/answers.model'
import { getAnswer } from '../../services/answers.service'
import AnswerSkeleton from './Answer.skeleton'
import { AnswerBox, AnswerContainer, MessageData, VacancyName } from './Answer.style'

const AnswerPage: React.FC<RouteComponentProps<{ id: string }>> = ({ match, history }) => {
  const [answer, setAnswer] = useState<IAnswer | null>(null)

  useEffect(() => {
    const get = async () => {
      setAnswer(await getAnswer(match.params.id))
    }
    void get()
  }, [])

  const answerComponent = (
    <AnswerBox>
        { answer ? <EnterpriseInline {...answer.enterprise}/> : null }
        <VacancyName color="black">Aplicação para a vaga de {answer?.vacancy.name}</VacancyName>
        {answer?.message}
        { answer ? <MessageData>Mensagem recebida {format(new Date(answer.sentAt), 'dd/MM')}</MessageData> : null}
    </AnswerBox>
  )

  return (
        <AnswerContainer>
            <HeaderNav title="Resposta" goBack={history.goBack} />
            {answer ? answerComponent : <AnswerSkeleton />}
        </AnswerContainer>
  )
}

export default AnswerPage
