import { View } from 'react-native';
import styled, { css } from 'styled-components/native';

export type StatCardTypeStyleProps = 'PRIMARY' | 'SECONDARY' | 'NEUTRAL';

type Props = {
    type: StatCardTypeStyleProps;
}

export const Container = styled(View)<Props>`
    width: 100%;
    align-items: center;
    justify-content: center;
    padding: 16px;
    border-radius: 8px;
    margin-bottom: 12px;
    background-color: ${({ theme, type }) => 
        type === 'PRIMARY' ? theme.COLORS.GREEN_LIGHT : type === 'SECONDARY' ? theme.COLORS.RED_LIGHT : theme.COLORS.GRAY_200}
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        font-size: ${ theme.FONT_SIZE.XL}px;
        color: ${ theme.COLORS.GRAY_700 };
        font-family: ${ theme.FONT_FAMILY.BOLD };
    `}
    margin-bottom: 8px;
`;

export const Text = styled.Text`
    ${({ theme }) => css`
        font-size: ${ theme.FONT_SIZE.SM}px;
        color: ${ theme.COLORS.GRAY_600};
        font-family: ${ theme.FONT_FAMILY.REGULAR};
    `}
    text-align: center;
`;