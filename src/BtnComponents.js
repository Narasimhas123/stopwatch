function BtnComponents(props) {
  return (
    <div>
      {props.status === 0 ? <button onClick={props.start}>start</button> : ""}
      {props.status === 1 ? (
        <div>
          <button onClick={props.stop}>stop</button>
          <button onClick={props.reset}>reset</button>
        </div>
      ) : (
        ""
      )}
      {props.status === 2 ? (
        <div>
          <button onClick={props.resume}>resume</button>
          <button onClick={props.reset}>reset</button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default BtnComponents;
