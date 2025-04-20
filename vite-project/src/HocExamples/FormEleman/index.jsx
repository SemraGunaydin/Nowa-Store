import { Children } from "react";


const FormEleman = ({Children, label}) => {
  return (
    <div 
      className="d-flex flex-column gap-2 w-50 mt-3 ">
        <label className="fw-bold ">{label}</label>
        {Children}
      </div>
  )
}

export default FormEleman;