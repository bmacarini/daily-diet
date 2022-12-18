import { ViewProps, TextInputProps } from 'react-native';

import { Container, Title, InputBox, InputTypeStyleProps } from './styles';

type Props = TextInputProps & InputTypeStyleProps & {
    title: string;
    style: ViewProps;
}

export function Input({ title, type = 'DEFAULT', style, isActive = false, ...rest }: Props) {
    return (
        <Container
            style={style}
        >
            <Title>
                {title}
            </Title>
            <InputBox
                {...rest}
                type={type}
                isActive={isActive}
            />
        </Container>
    )
}