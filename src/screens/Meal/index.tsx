
import { useNavigation } from '@react-navigation/native';

import { Container, ContainerBg, ContainerData, Title, Text, Subtitle, ContainerBtns } from './styles';

import { HeaderNavigation } from '@components/HeaderNavigation';
import { Button } from '@components/Button';
import { Tag } from '@components/Tag';

export function Meal() {

    const navigation = useNavigation();

    function handleEditMeal() {
        navigation.navigate('edit', {meal: 'Pizza'});
    }

    function handleDeleteMeal() {
        navigation.navigate('delete', {meal: 'Pizza'});
    }

    return (
        <Container
            type='SUCCESS'
        >
            <HeaderNavigation
                icon='arrow-back'
                title='Refeição'
                type='NEUTRAL'
            />
            <ContainerBg>
                <ContainerData>
                    <Title>
                        Sanduíche
                    </Title>
                    <Text>
                        Sanduíche de pão integral com atum e salada de alface e tomate.
                    </Text>
                    <Subtitle>
                        Data e hora
                    </Subtitle>
                    <Text>
                        12/08/2022 às 16:00
                    </Text>
                    <Tag 
                        type='SUCCESS'

                    />
                </ContainerData>
                <ContainerBtns>
                    <Button
                        text='Editar refeição'
                        icon='edit'
                        type='PRIMARY'
                        hasIcon
                        inAColumn
                        onPress={handleEditMeal}
                    />
                    <Button
                        text='Excluir refeição'
                        icon='delete-outline'
                        type='SECONDARY'
                        hasIcon
                        onPress={handleDeleteMeal}
                    />
                </ContainerBtns>
            </ContainerBg>
        </Container>
    )
}