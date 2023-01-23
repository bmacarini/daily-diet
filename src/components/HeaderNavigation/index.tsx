import { TouchableOpacityProps } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

import { Container, Icon, IconContainer, Title, HeaderNavigationTypeStyleProps } from './styles';

type Props = TouchableOpacityProps & {
    icon: keyof typeof MaterialIcons.glyphMap;
    title?: string;
    type: HeaderNavigationTypeStyleProps;
    isEditScreen?: boolean;
}

export function HeaderNavigation({ icon, title, type, isEditScreen, ...rest }: Props) {

    const navigation = useNavigation();

    function handleGoBack() {
        navigation.navigate('home');
    }

    function handleGoMealScreen() {
        navigation.goBack();
    }

    return (
        <Container>
            <IconContainer 
            {...rest}
            activeOpacity={0.8}
            onPress={
                isEditScreen ? handleGoMealScreen : handleGoBack}
            >
                <Icon
                    name={icon}
                    type={type}
                />
            </IconContainer>
            <Title>
                {title}
            </Title>
        </Container>
    )
}