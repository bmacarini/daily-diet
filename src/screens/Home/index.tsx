import { useState, useCallback } from 'react';
import { View, SectionList, Alert } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import { mealRegisterGetAll } from '@storage/meal/mealRegisterGetAll';
import { MealStorageDTO } from '@storage/meal/MealStorageDTO';

import { Button } from '@components/Button';
import { HeaderUser } from '@components/HeaderUser';
import { PercentCard } from '@components/PercentCard';
import { MealCard } from '@components/MealCard';

import { Container, Text, ListTitle } from './styles';


export function Home() {

    const [registers, setRegisters] = useState<MealStorageDTO[]>([]);
    const [percent, setPercent] = useState(0)

    const navigation = useNavigation();

    function handleAddMeal() {
        navigation.navigate('register')
    }

    function handlePercentCard() {
        navigation.navigate('stats')
    }

    async function handleCheckInfosMeal(
        mealId: string,
        mealName: string,
        mealDescription: string,
        mealDate: string,
        mealTime: string,
        mealIsOnTheDiet: string,
    ) {
        navigation.navigate('meal', {
            id: mealId,
            name: mealName,
            description: mealDescription,
            date: mealDate,
            time: mealTime,
            isOnTheDiet: mealIsOnTheDiet
        });
    }

    async function fetchMeals() {
        try {

            const storedMeals = await mealRegisterGetAll();
            setRegisters(storedMeals);

            const dataOnTheDiet = storedMeals.filter(register => register.data.find(meal => meal.isOnTheDiet === 'SUCCESS'));

            const dataOutOfTheDiet = storedMeals.filter(register => register.data.find(meal => meal.isOnTheDiet === 'FAILURE'));

            const totalOfMeals = dataOnTheDiet.length + dataOutOfTheDiet.length;

            const totalPercent = (dataOnTheDiet.length / totalOfMeals * 100);

            totalOfMeals === 0 ? setPercent(0) : setPercent(totalPercent);

        } catch (error) {
            Alert.alert('Refeições', 'Não foi possível carregar os registros de refeições.');
        }
    }

    useFocusEffect(useCallback(() => {
        fetchMeals();
    }, []));

    return (
        <Container>
            <HeaderUser />
            {percent >= 50 ?
                <PercentCard
                    title={`${percent.toFixed(2)}%`}
                    text='das refeições dentro da dieta'
                    icon='north-east'
                    style={{ marginBottom: 40 }}
                    onPress={handlePercentCard}
                /> :
                <PercentCard
                    title={`${percent.toFixed(2)}%`}
                    text='das refeições dentro da dieta'
                    icon='north-east'
                    style={{ marginBottom: 40 }}
                    onPress={handlePercentCard}
                    type='FAILURE'
                />
            }
            <Text>
                Refeições
            </Text>
            <Button
                type='PRIMARY'
                icon='add'
                hasIcon
                text='Nova refeição'
                onPress={handleAddMeal}
            />
            <SectionList
                sections={registers}
                keyExtractor={item => item.id}
                renderItem={({ item }) =>
                    <MealCard
                        time={item.time}
                        text={item.name}
                        icon='circle'
                        type={item.isOnTheDiet}
                        onPress={() => handleCheckInfosMeal(
                            item.id,
                            item.name,
                            item.description,
                            item.date,
                            item.time,
                            item.isOnTheDiet
                        )}
                    />
                }
                renderSectionHeader={({ section: { title } }) => (
                    <ListTitle
                        style={{ marginTop: 32 }}
                    >
                        {title}
                    </ListTitle>
                )}
                stickySectionHeadersEnabled={false}
                SectionSeparatorComponent={() => (<View style={{ marginBottom: 8 }} />)}
                showsVerticalScrollIndicator={false}
            />
        </Container>
    );
}