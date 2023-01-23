import { ViewProps } from 'react-native';
import { Container, Title, Text, StatCardTypeStyleProps } from './styles';

type Props = ViewProps & {
    title: number;
    text: string;
    type: StatCardTypeStyleProps;
}

export function StatCard({ title, text, type, ...rest }:Props) {
    return(
        <Container
            {...rest}
            type={type}
        >
            <Title>
                {title}
            </Title>
            <Text>
                {text}
            </Text>
        </Container>
    )
}