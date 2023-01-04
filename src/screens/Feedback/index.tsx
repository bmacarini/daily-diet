import { useNavigation, useRoute } from '@react-navigation/native';

import { useTheme } from 'styled-components/native';

import { Button } from '@components/Button';

import { Container, Title, Text, Image } from './styles';
import successImg from '@assets/feedbackPositive.png';
import failureImg from '@assets/feedbackNegative.png';

type RouteParams = {
    isOnTheDiet: string;
};


export function Feedback() {

    const { COLORS, FONT_FAMILY } = useTheme();

    const navigation = useNavigation();

    function handleGoBack() {
        navigation.navigate('home');
    }

    const route = useRoute();
    const { isOnTheDiet } = route.params as RouteParams;

    return (
        <Container>
            {
                isOnTheDiet === 'SUCCESS' ?
                    <Title
                        style={{ color: COLORS.GREEN_DARK }}
                    >
                        Continue assim
                    </Title> :
                    <Title
                        style={{ color: COLORS.RED_DARK }}
                    >
                        Que pena
                    </Title>
            }
            {
                isOnTheDiet === 'SUCCESS' ?
                    <Text>
                        Você continua <Text style={{ fontFamily: FONT_FAMILY.BOLD }}>dentro da dieta</Text>. Muito bem!
                    </Text> :
                    <Text>
                        Você <Text style={{ fontFamily: FONT_FAMILY.BOLD }}>saiu da dieta</Text> dessa vez, mas continue se esforçando e não desista!
                    </Text>
            }
            {
                isOnTheDiet === 'SUCCESS' ?
                    <Image
                        source={successImg}
                    /> :
                    <Image
                        source={failureImg}
                    />
            }

            <Button
                text='Ir para a página inicial'
                feedbackType
                onPress={handleGoBack}
            />
        </Container>
    )
}