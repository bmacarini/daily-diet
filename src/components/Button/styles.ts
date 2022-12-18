import { Pressable } from 'react-native';
import styled, { css } from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';

export type ButtonTypeStyleProps = {
    type?: 'PRIMARY' | 'SECONDARY';
    hasIcon?: boolean;
    inARow?: boolean;
    inAColumn?: boolean;
    feedbackType?: boolean;
    inADialog?: boolean;
}

export const Container = styled(Pressable)<ButtonTypeStyleProps>`
    flex: ${({ inADialog }) => inADialog ? 1 : 0};
    width: ${({ feedbackType }) => feedbackType ? 65 : 100}%;
    height: 50px;
    min-height: 50px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.GRAY_700 : theme.COLORS.WHITE};
    border: ${({ theme, type }) => type === 'SECONDARY' && 1 && 'solid' && theme.COLORS.GRAY_700};
    margin-right: ${({ inARow }) => inARow ? 12 : 0}px;
    margin-bottom: ${({ inAColumn }) => inAColumn ? 8 : 0}px;
`;

export const Text = styled.Text<ButtonTypeStyleProps>`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
    `}
    color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_700};
`;

export const IconContainer = styled.View<ButtonTypeStyleProps>`
    margin-right: ${({ hasIcon }) => hasIcon ? 12 : 0}px;
`;

export const Icon = styled(MaterialIcons).attrs<ButtonTypeStyleProps>(({ theme, type }) => ({
    color: type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_700,
    size: 24
}))``;