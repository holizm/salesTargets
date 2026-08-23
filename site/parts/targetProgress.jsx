export default ({ snapshot }) => <dl class='progress'>
    <dt class='value'>{snapshot.targetValue}</dt>
    <dd class='achievedValue'>{snapshot.achievedValue}</dd>
    <dd class='attainmentPercentage'>{snapshot.attainmentPercentage}</dd>
</dl>
