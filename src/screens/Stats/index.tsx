import { useState } from 'react';
import { Alert } from 'react-native';
import { useTheme } from 'styled-components';

import { mealRegisterGetAll } from '@storage/meal/mealRegisterGetAll';
import { mealsSequenceInsideDiet } from '@utils/mealsSequenceInsideDiet';

import { HeaderNavigation } from '@components/HeaderNavigation';
import { StatCard } from '@components/StatCard';

import { Container, ResultTitle, ResultText, ContainerStats, StatsTitle, DietContainer } from './styles';

export function Stats() {
    const [totalOfMeals, setTotalOfMeals] = useState(0);
    const [percent, setPercent] = useState(0)
    const [sequence, setSequence] = useState(0);
    const [mealsOnTheDiet, setMealsOnTheDiet] = useState(0);
    const [mealsOutOfTheDiet, setMealsOutOfTheDiet] = useState(0);

    async function fetchRegisters() {
        try {
            const storedMeals = await mealRegisterGetAll();

            const dataOnTheDiet = storedMeals.filter(register => register.data.find(meal => meal.isOnTheDiet === 'SUCCESS'));
            setMealsOnTheDiet(dataOnTheDiet.length);

            const dataOutOfTheDiet = storedMeals.filter(register => register.data.find(meal => meal.isOnTheDiet === 'FAILURE'));
            setMealsOutOfTheDiet(dataOutOfTheDiet.length);

            const totalOfMeals = dataOnTheDiet.length + dataOutOfTheDiet.length;
            setTotalOfMeals(totalOfMeals);

            const totalPercent = (dataOnTheDiet.length / totalOfMeals * 100);

            totalOfMeals === 0 ? setPercent(0) : setPercent(totalPercent);


        } catch (error) {
            Alert.alert('Não foi possível carregar sua lista de registros de refeições.')
        }
    }

    fetchRegisters();

    async function mealsSequence() {
        try {
            const result = await mealsSequenceInsideDiet();
            setSequence(result);
        } catch (error) {
            console.log(error);
        }
    }

    mealsSequence();

    const { COLORS } = useTheme();

    return (
        <>
            {percent >= 50 ? <Container>
                <HeaderNavigation
                    icon='arrow-back'
                    type='SUCCESS'
                />
                <ResultTitle>
                    {`${percent.toFixed(2)}%`}
                </ResultTitle>
                <ResultText>
                    das refeições dentro da dieta
                </ResultText>
                <ContainerStats>
                    <StatsTitle>
                        Estatísticas gerais
                    </StatsTitle>
                    <StatCard
                        title={sequence}
                        text='melhor sequência de pratos dentro da dieta'
                        type='NEUTRAL'
                    />
                    <StatCard
                        title={totalOfMeals}
                        text='refeições registradas'
                        type='NEUTRAL'
                    />
                    <DietContainer>
                        <StatCard
                            title={mealsOnTheDiet}
                            text='refeições dentro da dieta'
                            type='PRIMARY'
                            style={{ marginRight: 6, flex: 1 }}
                        />
                        <StatCard
                            title={mealsOutOfTheDiet}
                            text='refeições fora da dieta'
                            type='SECONDARY'
                            style={{ marginLeft: 6, flex: 1 }}
                        />
                    </DietContainer>
                </ContainerStats>
            </Container>
                :
                <Container
                    style={{ backgroundColor: COLORS.RED_LIGHT }}
                >
                    <HeaderNavigation
                        icon='arrow-back'
                        type='FAILURE'
                    />
                    <ResultTitle>
                        {`${percent.toFixed(2)}%`}
                    </ResultTitle>
                    <ResultText>
                        das refeições dentro da dieta
                    </ResultText>
                    <ContainerStats>
                        <StatsTitle>
                            Estatísticas gerais
                        </StatsTitle>
                        <StatCard
                            title={sequence}
                            text='melhor sequência de pratos dentro da dieta'
                            type='NEUTRAL'
                        />
                        <StatCard
                            title={totalOfMeals}
                            text='refeições registradas'
                            type='NEUTRAL'
                        />
                        <DietContainer>
                            <StatCard
                                title={mealsOnTheDiet}
                                text='refeições dentro da dieta'
                                type='PRIMARY'
                                style={{ marginRight: 6, flex: 1 }}
                            />
                            <StatCard
                                title={mealsOutOfTheDiet}
                                text='refeições fora da dieta'
                                type='SECONDARY'
                                style={{ marginLeft: 6, flex: 1 }}
                            />
                        </DietContainer>
                    </ContainerStats>
                </Container>
            }
        </>
    )
}