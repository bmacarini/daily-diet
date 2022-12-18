import styled, { css } from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons'

export type TagTypeStyleProps = {
    type?: 'SUCCESS' | 'FAILURE';
}

export const Container = styled.View`
    width: 50%;
    flex-direction: row;
    padding: 8px 16px;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.COLORS.GRAY_200};
`;

export const Icon = styled(MaterialIcons).attrs<TagTypeStyleProps>(({ theme, type }) => ({
    color: type === 'SUCCESS' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
    size: 8,
}))`
    margin-right: 8px;
`;

export const Text = styled.Text`
        ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.SM}px;
        color: ${theme.COLORS.GRAY_700};
        font-family: ${theme.FONT_FAMILY.REGULAR};
    `}
`;