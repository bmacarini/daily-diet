import { SafeAreaView } from 'react-native-safe-area-context';

import styled, { css } from 'styled-components/native';

export const Container = styled(SafeAreaView)`
    flex: 1;
    align-items: center;
    padding-top: 24px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_300}; 
`;

export const ContainerForm = styled.View`
    flex: 1;
    width: 100%;
    border-radius: 20px;
    align-items: center;
    justify-content: space-between;
    margin-top: 32px;
    padding-top: 32px;
    padding-right: 24px;
    padding-left: 24px;
    padding-bottom: 24px;
    background-color: ${({ theme }) => theme.COLORS.WHITE}
`;

export const Form = styled.KeyboardAvoidingView`
    width: 100%;
`;

export const DateTimeContainer = styled.View`
    flex-direction: row;
    margin-bottom: 24px;
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.SM}px;
        color: ${theme.COLORS.GRAY_600};
        font-family: ${theme.FONT_FAMILY.BOLD};
    `}
    margin-bottom: 4px;
`;

export const SelectContainer = styled.View`
    flex-direction: row;
`;

/*export const ButtonContainer = styled.View`
    position: absolute;
    top: 95%;
    width: 88%;
`;*/