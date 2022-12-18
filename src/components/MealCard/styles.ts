import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';

export type CardTypeStyleProps = 'SUCCESS' | 'FAILURE'

type Props = {
    type?: CardTypeStyleProps;
}

export const Container = styled(TouchableOpacity)`
    width: 100%;
    height: 50px;
    min-height: 50px;
    border-radius: 6px;
    padding: 12px;
    flex-direction: row;
    align-items: center;
    margin-bottom: 8px;
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300 };
`;

export const Time = styled.Text`
    ${({ theme }) => css`
        font-size: ${(theme.FONT_SIZE.XM)}px;
        font-family: ${(theme.FONT_FAMILY.BOLD)};
        color: ${(theme.COLORS.GRAY_700)};
    `};
`;

export const Divider = styled.Text`
    width: 2px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_400 };
    margin-left: 12px;
`;

export const Text = styled.Text`
        ${({ theme }) => css`
        font-size: ${(theme.FONT_SIZE.MD)}px;
        font-family: ${(theme.FONT_FAMILY.REGULAR)};
        color: ${(theme.COLORS.GRAY_600)};
    `};
    margin-left: 12px;
`;

export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, type }) => ({
    color: type === 'SUCCESS' ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID,
    size: 24,
}))`
    position: absolute;
    left: 95%;
`;