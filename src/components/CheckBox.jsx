const CheckBox = ({ name, checked, setChecked }) => {
  return (
    <>
    <label>
      <input
        className="mr-2"
        name={name}
        id={name}
        type='checkbox'
        checked={ checked }
        onChange={ setChecked }
      />
        {name}
      </label>
    </>
  )
}
export default CheckBox