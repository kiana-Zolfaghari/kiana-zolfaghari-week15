// eslint-disable-next-line react/prop-types
const Input = ({ handleChange, hint, value }) => {
  return (
    <>
      <div className="input">
        {!!value && <label htmlFor="input">{hint}</label>}
        <input type="text" id="input" onChange={handleChange} />
      </div>
      {!!value && (
        <p style={{ textAlign: "center", fontWeight: "600" }}>{hint}</p>
      )}
    </>
  );
};

export default Input;
