import ResultLayout from "../components/ResultLayout"

function AllResultPage() {
  return (
    <>
        <div className="text-2xl text-red-600">รายชื่อผู้ผ่านการคัดเลือก</div>
        <ResultLayout results={"ok"} />
    </>
  )
}

export default AllResultPage