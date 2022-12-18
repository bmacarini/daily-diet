import { SafeAreaView } from 'react-native-safe-area-context';

import styled, { css } from 'styled-components/native';

export type MealTypeStyleProps = 'SUCCESS' | 'FAILURE';

type Props = {
    type?: MealTypeStyleProps;
}

export const Container = styled(SafeAreaView)<Props>`
    flex: 1;
    align-items: center;
    padding-top: 24px;
    background-color: ${({ theme, type }) => 
        type === 'SUCCESS' ? theme.COLORS.GREEN_LIGHT : type === 'FAILURE' ? theme.COLORS.RED_LIGHT : theme.COLORS.GRAY_300}; 
`;

export const ContainerBg = styled.View`
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

export const ContainerData = styled.View``;

export const Title = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.LG}px;
        color: ${theme.COLORS.GRAY_700};
        font-family: ${theme.FONT_FAMILY.BOLD};
    `}
    margin-bottom: 8px;
`;

export const Text = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.MD}px;
        color: ${theme.COLORS.GRAY_600};
        font-family: ${theme.FONT_FAMILY.REGULAR};
    `}
    margin-bottom: 24px;
`;

export const Subtitle = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.SM}px;
        color: ${theme.COLORS.GRAY_700};
        font-family: ${theme.FONT_FAMILY.BOLD};
    `}
    margin-bottom: 8px;
`;

export const ContainerBtns = styled.View`
    flex: 1;
    justify-content: flex-end;
`;