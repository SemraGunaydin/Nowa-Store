

const Field = ({children, style}) => {
  return (
    <div className="mt-5 border border-4 p-3 d-flex  rounded flex-column gap-3" style={{style}}>
        {children}
    </div>
  )
}

export default Field;