import { getRandomHexColor } from "helpers/random-color"; 
import {Stat, StatTitle, StatList, StatItem, StatItemLabel, StatItemPercentage} from './Statistics.styled.jsx';

export const Statistics = ({title, stats}) => {
  return (
    <Stat>
      {title && <StatTitle>{title}</StatTitle>}          

      <StatList>
        {stats.map(({id, label, percentage}) => 
          <StatItem  key={id} color={getRandomHexColor()}>
            <StatItemLabel>{label}</StatItemLabel>
              <StatItemPercentage>{percentage}%</StatItemPercentage>
            </StatItem>
        )}
      </StatList>
    </Stat>
  )
}