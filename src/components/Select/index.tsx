import { TouchableOpacityProps } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { Container, Icon, Text, SelectTypeStyleProps } from './styles';

type Props = TouchableOpacityProps & SelectTypeStyleProps & {
    icon: keyof typeof MaterialIcons.glyphMap;
    text: string;
};

export function Select({ isActive = false, icon, text, type, ...rest }: Props) {

    return (
        <Container
            {...rest}
            isActive={isActive}
            type={type}
        >
            <Icon
                name={icon}
                type={type}
            />
            <Text>
                {text}
            </Text>
        </Container>
    )
}