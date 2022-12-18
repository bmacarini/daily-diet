import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';

export type PercentCardTypeStyleProps = 'SUCCESS' | 'FAILURE'

type Props = {
    type?: PercentCardTypeStyleProps;
}

export const Container = styled(TouchableOpacity) <Props>`
    width: 100%;
    border-radius: 8px;
    padding: 20px;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme, type }) => type === 'SUCCESS' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT };
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        font-size: ${ theme.FONT_SIZE.XXL}px;
        color: ${ theme.COLORS.GRAY_700 };
        font-family: ${ theme.FONT_FAMILY.BOLD };
    `}
    margin-bottom: 2px;
`;

export const Text = styled.Text`
    ${({ theme }) => css`
        font-size: ${ theme.FONT_SIZE.SM}px;
        color: ${ theme.COLORS.GRAY_600};
        font-family: ${ theme.FONT_FAMILY.REGULAR};
    `}
`;

export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, type }) => ({
    color: type === 'SUCCESS' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
    size: 24,
}))`
    position: absolute;
    top: 10%;
    left: 103%;
`;