import { DateTime } from 'list'

export default item => <>
    <td>{item.title}</td>
    <td>{item.salesTargetMetric}</td>
    <DateTime value={item.startDate} />
    <DateTime value={item.endDate} />
    <td>{item.targetValue}</td>
    <td>{item.state?.title}</td>
</>
