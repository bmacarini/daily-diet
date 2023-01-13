import { useRef, useState } from 'react';
import { Alert, TextInput, TouchableWithoutFeedback, Keyboard, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import uuid from 'react-native-uuid';

import { mealRegisterCreate } from '@storage/meal/mealRegisterCreate';

import { MealStorageDTO } from '@storage/meal/MealStorageDTO';

import { Button } from '@components/Button';
import { HeaderNavigation } from '@components/HeaderNavigation';
import { Input } from '@components/Input';
import { Select } from '@components/Select';

import { Title, Container, ContainerForm, Form, DateTimeContainer, SelectContainer } from './styles';

export function Register() {

    const [mealName, setMealName] = useState('');
    const [mealDescription, setRegisterDescription] = useState('');
    const [mealDate, setMealDate] = useState('');
    const [mealTime, setMealTime] = useState('');
    const [mealOnTheDiet, setMealOnTheDiet] = useState('');

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

    const changeToDescriptionInputRef = useRef<TextInput | null>(null);
    const changeToDateInputRef = useRef<TextInput | null>(null);
    const changeToTimeInputRef = useRef<TextInput | null>(null);

    async function handleNewMeal() {
        if (mealName.trim().length === 0) {
            return Alert.alert('Nova refeição', 'Informe o nome da refeição que quer adicionar.');
        }

        const id = String(uuid.v4());

        const newMeal: MealStorageDTO = {
            title: mealDate,
            data: [{
                id,
                name: mealName,
                description: mealDescription,
                date: mealDate,
                time: mealTime,
                isOnTheDiet: mealOnTheDiet
            }],
        }

        try {
            await mealRegisterCreate(newMeal);

            navigation.navigate('feedback', { isOnTheDiet: mealOnTheDiet });

        } catch (error) {
            Alert.alert(`${newMeal.data[0].name}`, 'Não foi possível criar essa refeição.');
        }
    }


    return (
        <Container>
            <HeaderNavigation
                title='Nova refeição'
                icon='arrow-back'
                type='NEUTRAL'
            />
            <TouchableWithoutFeedback
                onPress={() => Keyboard.dismiss()}
            >
                <ContainerForm>
                    <Form
                        behavior={'position'}
                    >
                        <Input
                            title='Nome'
                            style={{ marginBottom: 24 }}
                            isActive={isFocusName}
                            onFocus={() => (
                                setIsFocusName(true)
                            )}
                            onBlur={() => (
                                setIsFocusName(false)
                            )}
                            onSubmitEditing={() => { changeToDescriptionInputRef.current?.focus(); }}
                            onChangeText={setMealName}
                        />
                        <Input
                            title='Descrição'
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
                            inputRef={changeToDescriptionInputRef}
                            onSubmitEditing={() => { changeToDateInputRef.current?.focus(); }}
                            onChangeText={setRegisterDescription}
                        />
                        <DateTimeContainer>
                            <Input
                                title='Data'
                                style={{ marginRight: 10, flex: 1 }}
                                isActive={isFocusDate}
                                onFocus={() => (
                                    setIsFocusDate(true)
                                )}
                                onBlur={() => (
                                    setIsFocusDate(false)
                                )}
                                inputRef={changeToDateInputRef}
                                onSubmitEditing={() => { changeToTimeInputRef.current?.focus(); }}
                                onChangeText={setMealDate}
                            />
                            <Input
                                title='Hora'
                                style={{ marginLeft: 10, flex: 1 }}
                                isActive={isFocusTime}
                                onFocus={() => (
                                    setIsFocusTime(true)
                                )}
                                onBlur={() => (
                                    setIsFocusTime(false)
                                )}
                                inputRef={changeToTimeInputRef}
                                onChangeText={setMealTime}
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
                                    setMealOnTheDiet('SUCCESS');
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
                                    setMealOnTheDiet('FAILURE');
                                }}
                            />
                        </SelectContainer>
                    </Form>
                    <Button
                        text='Cadastrar refeição'
                        onPress={handleNewMeal}
                    />
                </ContainerForm>
            </TouchableWithoutFeedback>
        </Container>
    )
}