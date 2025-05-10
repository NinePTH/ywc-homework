interface Props {
    results: string | null
}


function ResultLayout(props: Props) {
  return (
    <>
        <div>ResultLayout</div>
        <p>{props.results}</p>
    </>
  )
}

export default ResultLayout