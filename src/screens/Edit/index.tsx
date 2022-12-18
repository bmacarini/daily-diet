import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';


import { Button } from '@components/Button';
import { HeaderNavigation } from '@components/HeaderNavigation';
import { Input } from '@components/Input';
import { Select } from '@components/Select';

import { Title, Container, ContainerForm, Form, DateTimeContainer, SelectContainer } from './styles';

export function Edit() {

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

    function handleEdit() {
        navigation.navigate('meal');
    };

    return (
        <Container>
            <HeaderNavigation
                title='Editar refeição'
                icon='arrow-back'
                type='NEUTRAL'
                isEditScreen
            />
            <ContainerForm>
                <Form>
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
                            }}
                        />
                    </SelectContainer>
                </Form>
                <Button
                    text='Salvar alterações'
                    onPress={handleEdit}
                />
            </ContainerForm>
        </Container>
    )
}