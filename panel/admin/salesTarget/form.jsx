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
        required
        salesTargetMetric
    />
    <DateTime
        required
        startDate
    />
    <DateTime
        endDate
        required
    />
    <Numeric
        required
        targetValue
    />
    <Text currency />
    <LongText description />
</>

export default <DialogForm inputs={inputs} />
