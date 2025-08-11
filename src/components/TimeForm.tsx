import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface Props {
  onAdd: (activity: string, hours: number) => void;
}

const TimeForm = ({ onAdd }: Props) => {
  const [activity, setActivity] = useState('');
  const [hours, setHours] = useState('');

  const handleSubmit = () => {
    const trimmedActivity = activity.trim();
    const parsedHours = Number(hours);

    if (!trimmedActivity || isNaN(parsedHours)) {
      alert("Please enter a valid activity and number of hours.");
      return;
    }

    if (parsedHours < 0 || parsedHours > 24) {
      alert("Hours must be between 0 and 24.");
      return;
    }

    onAdd(trimmedActivity, parsedHours);
    setActivity('');
    setHours('');
  };

  const isDisabled = !activity.trim() || !hours.trim();

  return (
    <div className='space-y-3'>
      <Input
        placeholder="Activity (e.g. Sleep)"
        value={activity}
        onChange={(e) => setActivity(e.target.value)}
      />
      <Input
        type="number"
        placeholder="Hours (0–24)"
        value={hours}
        onChange={(e) => setHours(e.target.value)}
        min={0}
        max={24}
      />
      <Button className='w-full' onClick={handleSubmit} disabled={isDisabled}>
        Add Activity
      </Button>
    </div>
  );
};

export default TimeForm;
