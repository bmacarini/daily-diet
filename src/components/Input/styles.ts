import { View, TextInput } from 'react-native';

import styled, { css } from 'styled-components/native';

export type InputTypeStyleProps = {
    isActive?: boolean;
    type?: 'DEFAULT' | 'DESCRIPTION';
}

export const Container = styled(View)`
    width: 100%;
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.SM}px;
        color: ${theme.COLORS.GRAY_600};
        font-family: ${theme.FONT_FAMILY.BOLD};
    `}
    margin-bottom: 4px;
`;

export const InputBox = styled(TextInput)<InputTypeStyleProps>`
    border-radius: 6px;
    padding: 14px;
    align-items: flex-start;
    height: ${({ type }) => type === 'DEFAULT' ? 48 : 120}px;
    min-height: 48px;

    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.MD}px;
        color: ${theme.COLORS.GRAY_700};
        font-family: ${theme.FONT_FAMILY.REGULAR};
        border: 1px solid ${theme.COLORS.GRAY_300};
    `}

    border: ${({ theme, isActive }) => 
        isActive ? theme.COLORS.GRAY_500 : theme.COLORS.GRAY_300};
`;