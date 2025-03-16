import { DatePicker } from "antd"
import dayjs from "dayjs"
import "dayjs/locale/fr"
import customParseFormat from "dayjs/plugin/customParseFormat"

dayjs.locale("fr")
dayjs.extend(customParseFormat)

type DatePickerComponentProps = {
  value: string | null
  onChange: (date: dayjs.Dayjs | null, dateString: string | string[]) => void
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
