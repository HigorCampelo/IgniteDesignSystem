import { Meta, StoryObj } from '@storybook/react'
import { TextInput, TextInputRootProps } from "./TextInput"
import { Envelope } from 'phosphor-react'

export default {
    title: 'Components/TextInput',
    component: TextInput.Root,
    args: {
        children: [

            <TextInput.Icon>
                <Envelope />
            </TextInput.Icon>,
            <TextInput.Input placeholder="Escreva seu e-mail" />,
        ],
    },
    argTypes: {
    }

} as Meta<TextInputRootProps>

export const Default: StoryObj<TextInputRootProps> = {}

export const withoutIcon: StoryObj<TextInputRootProps> = {
    args: {
        children: [
            <TextInput.Input placeholder="Escreva seu e-mail" />,
        ],
    }

}

