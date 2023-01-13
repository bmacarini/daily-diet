import { useState } from 'react';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { MealStorageDTO } from '@storage/meal/MealStorageDTO';
import { mealRegisterEdit } from '@storage/meal/mealRegisterEdit';

import { Button } from '@components/Button';
import { HeaderNavigation } from '@components/HeaderNavigation';
import { Input } from '@components/Input';
import { Select } from '@components/Select';

import { Title, Container, ContainerForm, Form, DateTimeContainer, SelectContainer } from './styles';

type RouteParams = {
    id: string;
    name: string;
    description: string;
    date: string;
    time: string;
    isOnTheDiet: string;
}

export function Edit() {
    const route = useRoute();
    const {
        id,
        name,
        description,
        date,
        time,
        isOnTheDiet
    } = route.params as RouteParams;

    const [newName, setNewName] = useState(name)
    const [newDescription, setNewDescription] = useState(description)
    const [newDate, setNewDate] = useState(date)
    const [newTime, setNewTime] = useState(time)
    const [newMealOnTheDiet, setnewMealOnTheDiet] = useState(isOnTheDiet)

    const [selectSuccess, setSelectSuccess] = useState(false);
    const [selectFailure, setSelectFailure] = useState(false);
    const [isFocusName, setIsFocusName] = useState(false);
    const [isFocusDescription, setIsFocusDescription] = useState(false);
    const [isFocusDate, setIsFocusDate] = useState(false);
    const [isFocusTime, setIsFocusTime] = useState(false);

    function toggleSelect() {
        if (selectSuccess === true || selectFailure === true) {
            setSelectSuccess(false);
            setSelectFailure(false);
        }
    }

    const navigation = useNavigation();

    async function handleEdit() {

        const registeredMeal: MealStorageDTO = {
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

        const editedMeal: MealStorageDTO = {
            title: newDate,
            data: [{
                id,
                name: newName,
                description: newDescription,
                date: newDate,
                time: newTime,
                isOnTheDiet: newMealOnTheDiet
            }],
        }

        await mealRegisterEdit(registeredMeal, editedMeal);
        
        navigation.navigate('home');
    };

    return (
        <Container>
            <HeaderNavigation
                title='Editar refeição'
                icon='arrow-back'
                type='NEUTRAL'
                isEditScreen
            />
            <TouchableWithoutFeedback
                onPress={() => Keyboard.dismiss()}
            >
                <ContainerForm>
                    <Form
                        behavior='position'
                    >
                        <Input
                            title='Nome'
                            defaultValue={name}
                            onChangeText={ newName => setNewName(newName)}
                            style={{ marginBottom: 24 }}
                            isActive={isFocusName}
                            onFocus={() => (
                                setIsFocusName(true)
                            )}
                            onBlur={() => (
                                setIsFocusName(false)
                            )}
                        />
                        <Input
                            title='Descrição'
                            defaultValue={description}
                            onChangeText={ newDescription => setNewDescription(newDescription)}
                            type='DESCRIPTION'
                            style={{ marginBottom: 24 }}
                            textAlignVertical='top'
                            multiline={true}
                            isActive={isFocusDescription}
                            onFocus={() => (
                                setIsFocusDescription(true)
                            )}
                            onBlur={() => (
                                setIsFocusDescription(false)
                            )}
                        />
                        <DateTimeContainer>
                            <Input
                                title='Data'
                                defaultValue={date}
                                onChangeText={ newDate => setNewDate(newDate)}
                                style={{ marginRight: 10, flex: 1 }}
                                isActive={isFocusDate}
                                onFocus={() => (
                                    setIsFocusDate(true)
                                )}
                                onBlur={() => (
                                    setIsFocusDate(false)
                                )}
                            />
                            <Input
                                title='Hora'
                                defaultValue={time}
                                onChangeText={ newTime => setNewTime(newTime)}
                                style={{ marginLeft: 10, flex: 1 }}
                                isActive={isFocusTime}
                                onFocus={() => (
                                    setIsFocusTime(true)
                                )}
                                onBlur={() => (
                                    setIsFocusTime(false)
                                )}
                            />
                        </DateTimeContainer>
                        <Title>
                            Está dentro da dieta?
                        </Title>
                        <SelectContainer>
                            <Select
                                icon='circle'
                                text='Sim'
                                type='SUCCESS'
                                style={{ flex: 1, marginRight: 20 }}
                                isActive={selectSuccess}
                                onPress={() => {
                                    toggleSelect();
                                    setSelectSuccess(!selectSuccess);
                                    setnewMealOnTheDiet('SUCCESS')
                                }}
                            />
                            <Select
                                icon='circle'
                                text='Não'
                                type='FAILURE'
                                style={{ flex: 1 }}
                                isActive={selectFailure}
                                onPress={() => {
                                    toggleSelect();
                                    setSelectFailure(!selectFailure);
                                    setnewMealOnTheDiet('FAILURE')
                                }}
                            />
                        </SelectContainer>
                    </Form>
                    <Button
                        text='Salvar alterações'
                        onPress={handleEdit}
                    />
                </ContainerForm>
            </TouchableWithoutFeedback>
        </Container>
    )
}