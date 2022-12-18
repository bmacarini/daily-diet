import { TouchableOpacityProps } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { Container, Time, Divider, Text, Icon, CardTypeStyleProps } from './styles';

type Props = TouchableOpacityProps & {
    text: string;
    icon: keyof typeof MaterialIcons.glyphMap;
    type: CardTypeStyleProps;
}

export function MealCard({ text, icon, type, ...rest }: Props) {
    return (
        <Container {...rest}>
            <Time>
                20:00
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