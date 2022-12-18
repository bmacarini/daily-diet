import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';

export type HeaderNavigationTypeStyleProps = 'SUCCESS' | 'FAILURE' | 'NEUTRAL'

type Props = {
    type?: HeaderNavigationTypeStyleProps;
}

export const Container = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
        ${({ theme }) => css`
        font-size: ${(theme.FONT_SIZE.LG)}px;
        font-family: ${(theme.FONT_FAMILY.BOLD)};
        color: ${(theme.COLORS.GRAY_700)};
    `};
`;

export const IconContainer = styled(TouchableOpacity)<Props>`
    position: absolute;
    left: 0;
    margin-left: 24px;
`;

export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, type }) => ({
    color: type === 'SUCCESS' ? theme.COLORS.GREEN_DARK : type === 'FAILURE' ? theme.COLORS.RED_DARK : theme.COLORS.GRAY_700,
    size: 24,
}))``;
