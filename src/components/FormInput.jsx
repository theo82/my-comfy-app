/**
 * Generates a form input element with the provided label, name, type, and default value.
 *
 * @param {object} label - The label for the input field
 * @param {string} name - The name of the input field
 * @param {string} type - The type of the input field
 * @param {string} defaultValue - The default value for the input field
 * @return {JSX.Element} A form input element
 */
const FormInput = ({ label, name, type, defaultValue }) => {
  return (
    <div className='form-control'>
      <label className='label'>
        <span className='label-text'>{label}</span>
      </label>
      <input
        name={name}
        defaultValue={defaultValue}
        type={type}
        placeholder='Type here'
        className='input input-bordered'
      />
    </div>
  )
}

export default FormInput
