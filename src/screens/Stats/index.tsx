import { HeaderNavigation } from '@components/HeaderNavigation';
import { StatCard } from '@components/StatCard';

import { Container, ResultTitle, ResultText, ContainerStats, StatsTitle, DietContainer } from './styles';

export function Stats() {
    return (
        <Container>
            <HeaderNavigation
                icon='arrow-back'
                type='SUCCESS'
            />
            <ResultTitle>
                90,86%
            </ResultTitle>
            <ResultText>
                das refeições dentro da dieta
            </ResultText>
            <ContainerStats>
                <StatsTitle>
                    Estatísticas gerais
                </StatsTitle>
                <StatCard
                    title='22'
                    text='melhor sequência de pratos dentro da dieta'
                    type='NEUTRAL'
                />
                <StatCard
                    title='109'
                    text='refeições registradas'
                    type='NEUTRAL'
                />
                <DietContainer>
                    <StatCard
                        title='99'
                        text='refeições dentro da dieta'
                        type='PRIMARY'
                        style={{ marginRight: 6, flex: 1 }}
                    />
                    <StatCard
                        title='10'
                        text='refeições fora da dieta'
                        type='SECONDARY'
                        style={{ marginLeft: 6, flex: 1 }}
                    />
                </DietContainer>
            </ContainerStats>
        </Container>
    )
}