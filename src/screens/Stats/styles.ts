import { SafeAreaView } from 'react-native-safe-area-context';

import styled, { css } from 'styled-components/native';

export const Container = styled(SafeAreaView)`
    flex: 1;
    align-items: center;
    padding-top: 24px;
    background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT}; 
`;

export const ResultTitle = styled.Text`
    ${({ theme }) => css`
        font-size: ${ theme.FONT_SIZE.XXL}px;
        color: ${ theme.COLORS.GRAY_700 };
        font-family: ${ theme.FONT_FAMILY.BOLD };
    `}
    margin-bottom: 2px;
`;

export const ResultText = styled.Text`
    ${({ theme }) => css`
        font-size: ${ theme.FONT_SIZE.SM}px;
        color: ${ theme.COLORS.GRAY_600};
        font-family: ${ theme.FONT_FAMILY.REGULAR};
    `}
    margin-bottom: 32px;
`;

export const ContainerStats = styled.View`
    flex: 1;
    width: 100%;
    border-radius: 20px;
    align-items: center;
    padding-top: 32px;
    padding-right: 24px;
    padding-left: 24px;
    padding-bottom: 24px;
    background-color: ${({ theme }) => theme.COLORS.WHITE}
`;

export const StatsTitle = styled.Text`
    ${({ theme }) => css`
        font-size: ${ theme.FONT_SIZE.SM}px;
        color: ${ theme.COLORS.GRAY_700 };
        font-family: ${ theme.FONT_FAMILY.BOLD };
    `}
    margin-bottom: 24px;
`;

export const DietContainer = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: center;
`;