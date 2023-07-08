import { SyncLoader } from "react-spinners"

const Loading = ({ className }) => {
  return (
    <div className={className}>
      <SyncLoader color="#FF324D" />
    </div>
  )
}

export default Loading
