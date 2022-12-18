import { PressableProps } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { useTheme } from 'styled-components';

import { Container, Text, Icon, IconContainer, ButtonTypeStyleProps } from './styles';

type Props = PressableProps & ButtonTypeStyleProps & {
    icon?: keyof typeof MaterialIcons.glyphMap;
    text: string;
}

export function Button({ text, type = 'PRIMARY', icon, hasIcon = false, inARow = false, ...rest }: Props) {

    const { COLORS } = useTheme();

    return (
        <>
            {
                type === 'PRIMARY' ?
                    <Container
                        {...rest}
                        type={type}
                        inARow={inARow}
                        style={({ pressed }) => [
                            {
                                backgroundColor: pressed
                                    ? COLORS.GRAY_700
                                    : COLORS.GRAY_600
                            }
                        ]}
                    >
                        <IconContainer
                            hasIcon={hasIcon}
                        >
                            <Icon
                                name={icon}
                                type={type}
                            />
                        </IconContainer>
                        <Text
                            type={type}
                        >
                            {text}
                        </Text>
                    </Container>
                :
                <Container
                {...rest}
                type={type}
                inARow={inARow}
                style={({ pressed }) => [
                    {
                        backgroundColor: pressed
                            ? COLORS.GRAY_300
                            : COLORS.WHITE
                    }
                ]}
            >
                <IconContainer
                    hasIcon={hasIcon}
                >
                    <Icon
                        name={icon}
                        type={type}
                    />
                </IconContainer>
                <Text
                    type={type}
                >
                    {text}
                </Text>
            </Container>
        }
        </>
    )
}