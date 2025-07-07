import { useState } from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

export default function Calendar() {
  const [date, setDate] = useState<
    {
      startDate: Date;
      endDate: Date;
      key: string;
    }[]
  >([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

  return (
    <div className="mt-6">
      <DateRange
        editableDateInputs={true}
        onChange={(item) =>
          setDate([
            {
              startDate: item.selection.startDate ?? new Date(),
              endDate: item.selection.endDate ?? new Date(),
              key: item.selection.key || 'selection',
            },
          ])
        }
        moveRangeOnFirstSelection={false}
        ranges={date}
      />
    </div>
  );
}