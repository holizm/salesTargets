import {
    DateTime,
    DialogForm,
    LongText,
    Numeric,
    Text,
} from 'form'

const inputs = <>
    <Text
        placeholder='salesTargetsAssignment'
        property='salesTargetAssignment'
        required
    />
    <DateTime
        placeholder='salesTargetsAchievementDate'
        property='achievementDate'
        required
    />
    <Numeric
        placeholder='salesTargetsAchievedValue'
        property='achievedValue'
        required
    />
    <LongText
        placeholder='salesTargetsDescription'
        property='description'
    />
</>

export default <DialogForm inputs={inputs} />
