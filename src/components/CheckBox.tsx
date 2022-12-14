import { clsx } from 'clsx';
import * as CheckBoxPrimitive from '@radix-ui/react-checkbox'
import { Check } from 'phosphor-react'


export interface CheckBoxProps extends CheckBoxPrimitive.CheckboxProps {

}

export function CheckBox(props: CheckBoxProps) {

    return (
        <CheckBoxPrimitive.Root className='w-6 h-6 p-{2px} bg-gray-800 rounded' {...props}>
            <CheckBoxPrimitive.CheckboxIndicator asChild>
                <Check weight='bold' className='h-5 w-5 text-cyan-500' />
            </CheckBoxPrimitive.CheckboxIndicator>
        </CheckBoxPrimitive.Root>

    )
}