import { TouchableOpacityProps } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { Container, Time, Divider, Text, Icon } from './styles';

type Props = TouchableOpacityProps & {
    time: string;
    text: string;
    icon: keyof typeof MaterialIcons.glyphMap;
    type: string;
}

export function MealCard({ time, text, icon, type, ...rest }: Props) {
    return (
        <Container {...rest}>
            <Time>
                {time}
            </Time>
            <Divider />
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