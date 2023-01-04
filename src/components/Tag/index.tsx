import { MaterialIcons } from '@expo/vector-icons';

import { Container, Icon, Text } from './styles';

type Props = {
    icon?: keyof typeof MaterialIcons.glyphMap;
    type: string;
}

export function Tag({ icon = 'circle', type }: Props) {
    return (
        <Container>
            <Icon 
                name={icon}
                type={type}
            />
            {
                type === 'SUCCESS' ? 
                <Text>
                    dentro da dieta
                </Text>
                :
                <Text>
                    fora da dieta
                </Text>
            }
        </Container>
    )
}