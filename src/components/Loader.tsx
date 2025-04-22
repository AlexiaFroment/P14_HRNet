import { LoadingOutlined } from "@ant-design/icons"
import { Flex } from "antd"
import Spin from "antd/es/spin"

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
