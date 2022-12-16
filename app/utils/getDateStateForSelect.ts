import { SelectOptions } from '@/components/common/ui/Select';

export const getDateStateForSelect = () => {
  const date = new Date();
  const currentYear = date.getFullYear();

  const days: SelectOptions[] = [];

  for (let i = 1; i <= 31; i++) {
    days.push({
      value: i.toString(),
      label: i.toString()
    });
  }

  const years: SelectOptions[] = [];
  for (let i = 1950; i <= currentYear; i++) {
    years.unshift({
      value: i.toString(),
      label: i.toString()
    });
  }

  const educationYears = years.map(el => el);
  for (let i = currentYear + 1; i <= currentYear + 4; i++) {
    educationYears.unshift({
      value: i.toString(),
      label: i.toString()
    });
  }

  const months: SelectOptions[] = [];
  for (let i = 1; i <= 12; i++) {
    i.toString().length === 1
      ? months.push({
          value: '0' + i,
          label: '0' + i
        })
      : months.push({
          value: i.toString(),
          label: i.toString()
        });
  }

  return {
    years,
    educationYears,
    months,
    days
  };
};