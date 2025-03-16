import { Button, Flex } from "antd"

type ButtonComponentProps = {
  text: string
  type?: "primary" | "default" | "dashed" | "link" | "text"
  color?: string
}

export const ButtonComponent: React.FC<ButtonComponentProps> = ({
  text,
  type = "primary",
  color,
}) => {
  return (
    <Flex>
      <Button type={type} style={{ background: color }}>
        {text}
      </Button>
    </Flex>
  )
}
