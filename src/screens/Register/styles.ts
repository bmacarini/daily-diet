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
    margin-top: 32px;
    padding-top: 32px;
    padding-right: 24px;
    padding-left: 24px;
    padding-bottom: 24px;
    background-color: ${({ theme }) => theme.COLORS.WHITE}
`;

export const Form = styled.KeyboardAvoidingView`
    width: 100%;
    margin-bottom: 24px;
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