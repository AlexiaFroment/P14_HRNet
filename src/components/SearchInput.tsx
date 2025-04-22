import Input from "antd/es/input"
import Space from "antd/es/space"

type SearchInputProps = {
  onSearch: (value: string) => void
}

export const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
  return (
    <Space direction='vertical'>
      <Input
        placeholder='Search...'
        onChange={(e) => onSearch(e.target.value)}
        style={{ width: 200 }}
      />
    </Space>
  )
}
