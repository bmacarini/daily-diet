import { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

import { mealRegisterDelete } from '@storage/meal/mealRegisterDelete';
import { MealStorageDTO } from '@storage/meal/MealStorageDTO';


import { HeaderNavigation } from '@components/HeaderNavigation';
import { Button } from '@components/Button';
import { Tag } from '@components/Tag';
import { ModalComponent } from '@components/Modal';

import { Container, ContainerBg, ContainerData, Title, Text, Subtitle, ContainerBtns } from './styles';

type RouteParams = {
    id: string;
    name: string;
    description: string;
    date: string;
    time: string;
    isOnTheDiet: string;
}


export function Meal() {
    const [modalVisible, setModalVisible] = useState(false);

    const navigation = useNavigation();

    const route = useRoute();
    const {
        id,
        name,
        description,
        date,
        time,
        isOnTheDiet
    } = route.params as RouteParams;

    function handleEditMeal(
        mealName: string,
        mealDescription: string,
        mealDate: string,
        mealTime: string,
        mealIsOnTheDiet: string,
    ) {
        navigation.navigate('edit', {
            id,
            name: mealName,
            description: mealDescription,
            date: mealDate,
            time: mealTime,
            isOnTheDiet: mealIsOnTheDiet
        });
    }

    async function handleDeleteMeal() {

        const mealToDelete: MealStorageDTO = {
            title: date,
            data: [{
                id,
                name,
                description,
                date,
                time,
                isOnTheDiet
            }],
        }

            await mealRegisterDelete(mealToDelete);

            navigation.navigate('home');
    };


    return (
        <Container
            type={isOnTheDiet}
        >
            <ModalComponent
                visible={modalVisible}
                onPressCancel={() => setModalVisible(!modalVisible)}
                onPressAction={() => handleDeleteMeal()}
            />
            <HeaderNavigation
                icon='arrow-back'
                title='Refeição'
                type='NEUTRAL'
            />
            <ContainerBg>
                <ContainerData>
                    <Title>
                        {name}
                    </Title>
                    <Text>
                        {description}
                    </Text>
                    <Subtitle>
                        Data e hora
                    </Subtitle>
                    <Text>
                        {date} às {time}
                    </Text>
                    <Tag
                        type={isOnTheDiet}

                    />
                </ContainerData>
                <ContainerBtns>
                    <Button
                        text='Editar refeição'
                        icon='edit'
                        type='PRIMARY'
                        hasIcon
                        inAColumn
                        onPress={() => handleEditMeal(
                            name,
                            description,
                            date,
                            time,
                            isOnTheDiet
                        )}
                    />
                    <Button
                        text='Excluir refeição'
                        icon='delete-outline'
                        type='SECONDARY'
                        hasIcon
                        onPress={() => setModalVisible(!modalVisible)}
                    />
                </ContainerBtns>
            </ContainerBg>
        </Container>
    )
}