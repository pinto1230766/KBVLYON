import 'react-datepicker';

declare module 'react-datepicker' {
  interface DatePickerProps {
    onDayClick?: (date: Date) => void;
    renderDayContents?: (day: number, date: Date) => React.ReactNode;
  }
}
