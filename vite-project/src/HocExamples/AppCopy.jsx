import Field from "./HocExamples";
import FormEleman from "./HocExamples/FormEleman";



const App = () => {
  return (
    <div className="mt-5 container"> 
    <form>
      <FormEleman label="Name:">
        <input type="text"
        className="form-control"
        placeholder="Add Name..." />
      </FormEleman>

      <div className="d-flex flex-column gap-2 w-50 mt-3 ">
        <label className="fw-bold">Surname:</label>
        <input type="text"
        className="form-control"
         placeholder="Add Surname..." />
      </div>
    </form>
    </div>
  )
}

export default App;