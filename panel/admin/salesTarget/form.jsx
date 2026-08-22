import {
    DateTime,
    DialogForm,
    LongText,
    Numeric,
    Select,
    Text,
    Title,
} from 'form'

const inputs = <>
    <Title />
    <Select
        options={[
            'revenue',
            'quantity',
            'margin',
            'orders',
            'newCustomers',
        ]}
        placeholder='salesTargetsMetric'
        property='salesTargetMetric'
        required
    />
    <DateTime
        placeholder='salesTargetsStartDate'
        property='startDate'
        required
    />
    <DateTime
        placeholder='salesTargetsEndDate'
        property='endDate'
        required
    />
    <Numeric
        placeholder='salesTargetsTargetValue'
        property='targetValue'
        required
    />
    <Text
        placeholder='salesTargetsCurrency'
        property='currency'
    />
    <LongText
        placeholder='salesTargetsDescription'
        property='description'
    />
</>

export default <DialogForm inputs={inputs} />
