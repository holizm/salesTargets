import {
    DateTime,
    DialogForm,
    LongText,
    Numeric,
    Text,
} from 'form'

const inputs = <>
    <Text
        placeholder='assignment'
        property='salesTargetAssignment'
        required
    />
    <DateTime
        placeholder='achievementDate'
        property='achievementDate'
        required
    />
    <Numeric
        placeholder='achievedValue'
        property='achievedValue'
        required
    />
    <LongText
        placeholder='description'
        property='description'
    />
</>

export default <DialogForm inputs={inputs} />
