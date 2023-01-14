import { Modal, ModalProps } from 'react-native';

import { Button } from '@components/Button';

import { Container, ModalView, Title, BtnContainer } from './styles';

type Props = ModalProps & {
    onPressCancel: () => void;
    onPressAction: () => void;
};

export function ModalComponent({ onPressCancel, onPressAction, ...rest }: Props) {

    return (
        <Modal
            animationType='none'
            transparent={true}
            {...rest}
        >
            <Container>
                <ModalView>
                    <Title>
                        Deseja realmente excluir o registro da refeição?
                    </Title>
                    <BtnContainer>
                        <Button
                            text='Cancelar'
                            type='SECONDARY'
                            inARow
                            inADialog
                            onPress={onPressCancel}
                        />
                        <Button
                            text='Sim, excluir'
                            type='PRIMARY'
                            inADialog
                            onPress={onPressAction}
                        />
                    </BtnContainer>
                </ModalView>
            </Container>
        </Modal>
    )
}