export const GenericButton = ({label, color}) =>  {
  const buttonStyle = {
    color: color,
    backgroundColor: 'black'
  };

  return (
      <>
        <button style={buttonStyle}>{label}</button>
      </>
    )
  }