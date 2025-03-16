import { LoadingOutlined } from "@ant-design/icons"
import { Flex, Spin } from "antd"

export const Loader: React.FC = () => {
  return (
    <Flex align='center' gap='middle'>
      <Spin
        indicator={
          <LoadingOutlined style={{ fontSize: 48, color: "pink" }} spin />
        }
      />
    </Flex>
  )
}
