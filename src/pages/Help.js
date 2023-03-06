function Help() {
  return (
    <div className='about'>
      <h1 className="formText">Survey Form </h1>
      <p className="formText"><i>Thank you for taking the time to help me improve the project </i></p>
      <form id="survey-form">
        <fieldset>
          <label htmlFor="name">Name:
            <input id="name" type="text" required placeholder="Enter your name" />
          </label>
          <label htmlFor="email">Email:
            <input id="email" type="email" required placeholder="Enter your email" />
          </label>
          <label htmlFor="number">Age (optional):
            <input id="number" type="number" min="13" max="100" placeholder="Enter your age" />
          </label>
          <label htmlFor="dropdown">Which option best describes your current role?
            <select id="dropdown" >
              <option>Select current role</option>
              <option>Student</option>
              <option>Teacher</option>
              <option>Prefer not to say</option>
              <option>Other</option>
            </select>
          </label>

          <label htmlFor="dropdown">
            What would you like to see improved?
          </label>
          <div className="formTextArea">

            <textarea id="dropdown" rows="3" placeholder="Enter your comments or suggestions...">
            </textarea>
          </div>
          <input className='btn btn-secondary' type="submit" />

        </fieldset>
      </form>
    </div>
  )
}

export default Help
