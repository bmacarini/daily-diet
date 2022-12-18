import { useNavigation } from '@react-navigation/native';

import { Button } from '@components/Button';

import { Container, DialogContainer, Title, BtnContainer } from './styles';

export function Delete() {

    const navigation = useNavigation();
    
    function handleCancelDelete() {
        navigation.navigate('meal');
    }

    function handleDelete() {
        navigation.navigate('home');
    }

    return (
        <Container>
            <DialogContainer>
                <Title>
                    Deseja realmente excluir o registro da refeição?
                </Title>
                <BtnContainer>
                    <Button
                        text='Cancelar'
                        type='SECONDARY'
                        inARow
                        inADialog
                        onPress={handleCancelDelete}
                    />
                    <Button
                        text='Sim, excluir'
                        type='PRIMARY'
                        inADialog
                        onPress={handleDelete}
                    />
                </BtnContainer>
            </DialogContainer>
        </Container>
    )
}