import { DateTime } from 'list'

export default item => <>
    <td>{item.salesTargetAssignment?.assignee?.title}</td>
    <DateTime value={item.achievementDate} />
    <td>{item.achievedValue}</td>
    <td>{item.salesTargetAssignment?.targetValue}</td>
</>
