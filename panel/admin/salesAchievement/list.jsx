import {
    DateTime,
    List,
} from 'list'
import Form from './form'

const headers = <>
    <th start>salesTargetsAssignee</th>
    <th>salesTargetsAchievementDate</th>
    <th>salesTargetsAchievedValue</th>
    <th>salesTargetsTargetValue</th>
</>

const row = item => <>
    <td>{item.salesTargetAssignment?.assignee?.title}</td>
    <DateTime value={item.achievementDate} />
    <td>{item.achievedValue}</td>
    <td>{item.salesTargetAssignment?.targetValue}</td>
</>

export default <List
    create={Form}
    hasEdit
    headers={headers}
    row={row}
/>
