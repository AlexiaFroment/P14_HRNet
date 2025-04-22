import DatePicker from "antd/es/date-picker"
import type { DatePickerProps } from "antd/es/date-picker"
import dayjs from "dayjs"
import "dayjs/locale/fr"
import customParseFormat from "dayjs/plugin/customParseFormat"

dayjs.locale("fr")
dayjs.extend(customParseFormat)

type DatePickerComponentProps = {
  value: string | null
  onChange: DatePickerProps["onChange"]
}

export const DatePickerComponent: React.FC<DatePickerComponentProps> = ({
  value,
  onChange,
}) => {
  return (
    <DatePicker
      size='small'
      value={value ? dayjs(value, "DD/MM/YYYY") : null}
      onChange={onChange}
      format='DD/MM/YYYY'
    />
  )
}
