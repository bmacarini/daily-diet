import { useState } from 'react';
import { View, SectionList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Button } from '@components/Button';
import { HeaderUser } from '@components/HeaderUser';
import { PercentCard } from '@components/PercentCard';

import { Container, Text, ListTitle } from './styles';
import { MealCard } from '@components/MealCard';

export function Home() {

    const [meal, setMeal] = useState([
        {
            title: '01.01.2023',
            data: ['Pizza', 'Burger', 'Risoto']
        },
        {
            title: '02.01.2023',
            data: ['Macarrão', 'Arroz', 'Batata']
        },
    ]);

    const navigation = useNavigation();

    function handleNewMeal() {
        navigation.navigate('register')
    }

    function handlePercentCard() {
        navigation.navigate('stats')
    }

    function handleMeal() {
        navigation.navigate('meal')
    }

    return (
        <Container>
            <HeaderUser />
            <PercentCard
                title='90,86%'
                text='das refeições dentro da dieta'
                icon='north-east'
                style={{ marginBottom: 40 }}
                onPress={handlePercentCard}
            />
            <Text>
                Refeições
            </Text>
            <Button
                type='PRIMARY'
                icon='add'
                hasIcon
                text='Nova refeição'
                onPress={handleNewMeal}
            />
            <SectionList
                sections={meal}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) =>
                    <MealCard
                        text={item}
                        icon='circle'
                        type='SUCCESS'
                        onPress={handleMeal}
                    />
                }
                renderSectionHeader={({ section: { title } }) => (
                    <ListTitle
                        style={{ marginTop: 40 }}
                    >
                        {title}
                    </ListTitle>
                )}
                stickySectionHeadersEnabled={false}
                SectionSeparatorComponent={() => (<View style={{ marginBottom: 16 }} />)}
                showsVerticalScrollIndicator={false}
            />
        </Container>
    );
}