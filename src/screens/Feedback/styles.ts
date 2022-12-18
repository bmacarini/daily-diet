import { SafeAreaView } from 'react-native-safe-area-context';

import { TextProps, ImageProps } from 'react-native';

import styled, { css } from 'styled-components/native';

export type FeedbackTypeStyleProps = {
    type?: 'SUCCESS' | 'FAILURE';
};

export const Container = styled(SafeAreaView)`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    padding: 32px;
`;

export const Title = styled.Text<TextProps>`
        ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.XL}px;
    `}
    margin-bottom: 8px;
`;

export const Text = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_700};
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.MD}px;
    `}
    text-align: center;
    margin-bottom: 40px;
`;

export const Image = styled.Image<ImageProps>`
    margin-bottom: 32px;
`;