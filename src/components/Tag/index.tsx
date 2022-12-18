import { MaterialIcons } from '@expo/vector-icons';

import { Container, Icon, Text, TagTypeStyleProps } from './styles';

type Props = TagTypeStyleProps & {
    icon?: keyof typeof MaterialIcons.glyphMap;
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