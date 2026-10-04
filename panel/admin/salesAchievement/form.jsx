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
        required
        salesTargetAssignment
    />
    <DateTime
        achievementDate
        required
    />
    <Numeric
        achievedValue
        required
    />
    <LongText description />
</>

export default <DialogForm inputs={inputs} />
