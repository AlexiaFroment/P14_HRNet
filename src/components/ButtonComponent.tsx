import Button from "antd/es/button"
import Flex from "antd/es/flex"

type ButtonComponentProps = {
  text: string
  type?: "primary" | "default" | "dashed" | "link" | "text"
  htmlType?: "submit" | "reset" | "button"
  color?: string
}

export const ButtonComponent: React.FC<ButtonComponentProps> = ({
  text,
  type = "primary",
  htmlType = "button",
  color,
}) => {
  return (
    <Flex>
      <Button type={type} style={{ background: color }} htmlType={htmlType}>
        {text}
      </Button>
    </Flex>
  )
}
