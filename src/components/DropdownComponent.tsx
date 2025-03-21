import { DownOutlined } from "@ant-design/icons"
import { MenuProps, Button, Dropdown, Space } from "antd"

type DropdownItem = {
  label: string
  key: string
}
type DropdownComponenProps = {
  value: string
  onChange: (value: string) => void
  items?: DropdownItem[]
  placeholder?: string
}

export const DropdownComponent: React.FC<DropdownComponenProps> = ({
  value,
  onChange,
  items = [],
  placeholder = "Select an option",
}) => {
  // Création du menu
  const menuProps: MenuProps = {
    items: items.map((item) => ({
      label: item.label,
      key: item.key,
      onClick: () => onChange(item.key),
    })),
  }

  const selectedLabel =
    items.find((item) => item.key === value[0])?.label || placeholder

  return (
    <Space wrap>
      <Dropdown
        menu={menuProps}
        placement='bottomLeft'
        autoAdjustOverflow={false}>
        <Button>
          <Space>
            {selectedLabel}
            <DownOutlined />
          </Space>
        </Button>
      </Dropdown>
    </Space>
  )
}
