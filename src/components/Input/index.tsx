import { ViewProps, TextInput, TextInputProps } from 'react-native';

import { Container, Title, InputBox, InputTypeStyleProps } from './styles';

type Props = TextInputProps & InputTypeStyleProps & {
    title: string;
    style: ViewProps;
    inputRef?: React.RefObject<TextInput> 
}

export function Input({ title, type = 'DEFAULT', style, inputRef, isActive = false, ...rest }: Props) {
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
                ref={inputRef}
            />
        </Container>
    )
}