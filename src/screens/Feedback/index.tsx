import { useNavigation } from '@react-navigation/native';

import { useTheme } from 'styled-components/native';

import { Button } from '@components/Button';

import { Container, Title, Text, Image, FeedbackTypeStyleProps } from './styles';
import successImg from '@assets/feedbackPositive.png';
import failureImg from '@assets/feedbackNegative.png';

export function Feedback({ type = 'FAILURE' }: FeedbackTypeStyleProps) {

    const { COLORS, FONT_FAMILY } = useTheme();

    const navigation = useNavigation();

    function handleGoBack() {
        navigation.navigate('home');
    }

    return (
        <Container>
            {
                type === 'SUCCESS' ?
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
                type === 'SUCCESS' ?
                    <Text>
                        Você continua <Text style={{ fontFamily: FONT_FAMILY.BOLD}}>dentro da dieta</Text>. Muito bem!
                    </Text> :
                    <Text>
                        Você <Text style={{ fontFamily: FONT_FAMILY.BOLD}}>saiu da dieta</Text> dessa vez, mas continue se esforçando e não desista!
                    </Text>
            }
            {
                type === 'SUCCESS' ?
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