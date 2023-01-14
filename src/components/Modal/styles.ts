import { SafeAreaView } from 'react-native-safe-area-context';

import styled, { css } from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 24px;
    background-color: ${({ theme }) => theme.COLORS.OPACITY_25};
`;

export const ModalView = styled.View`
    align-items: center;
    justify-content: center;
    padding: 24px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.LG}px;
        color: ${theme.COLORS.GRAY_600};
        font-family: ${theme.FONT_FAMILY.BOLD};
    `}
    text-align: center;
    margin-bottom: 32px;
`;

export const BtnContainer = styled.View`
    flex-direction: row;
`;