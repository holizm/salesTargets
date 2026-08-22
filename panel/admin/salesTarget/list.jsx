import {
    DateTime,
    List,
    Title,
} from 'list'
import Form from './form'

const headers = <>
    <th start>salesTargetsTarget</th>
    <th>salesTargetsMetric</th>
    <th>salesTargetsStartDate</th>
    <th>salesTargetsEndDate</th>
    <th>salesTargetsTargetValue</th>
    <th>salesTargetsState</th>
</>

const row = item => <>
    <td>{item.title}</td>
    <td>{item.salesTargetMetric}</td>
    <DateTime value={item.startDate} />
    <DateTime value={item.endDate} />
    <td>{item.targetValue}</td>
    <td>{item.state?.title}</td>
</>

export default <List
    create={Form}
    filters={<Title />}
    hasDelete
    hasEdit
    headers={headers}
    row={row}
/>
