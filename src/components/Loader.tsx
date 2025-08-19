import { LoadingOutlined } from "@ant-design/icons"
import Spin from "antd/es/spin"
import Flex from "antd/es/flex"

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
