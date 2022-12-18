
import { TouchableOpacityProps } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { Container, Title, Text, Icon, PercentCardTypeStyleProps } from './styles';

type Props = TouchableOpacityProps & {
    title: string;
    text: string;
    icon?: keyof typeof MaterialIcons.glyphMap;
    type?: PercentCardTypeStyleProps;
}

export function PercentCard({ title, text, type = 'SUCCESS', icon, ...rest }: Props) {
    return (
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
            <Icon
                name={icon}
                type={type}
            />
        </Container>
    )
}