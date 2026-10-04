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
        placeholder='metric'
        property='salesTargetMetric'
        required
    />
    <DateTime
        placeholder='startDate'
        property='startDate'
        required
    />
    <DateTime
        placeholder='endDate'
        property='endDate'
        required
    />
    <Numeric
        placeholder='targetValue'
        property='targetValue'
        required
    />
    <Text
        placeholder='currency'
        property='currency'
    />
    <LongText
        placeholder='description'
        property='description'
    />
</>

export default <DialogForm inputs={inputs} />
