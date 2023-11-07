const Job = (props) => {
  return (
    <div className={`Job ${props.className}`}>
      <h1>{props.title}</h1>
      <span>
        {props.contractType} - {props.country} - {props.city}
      </span>
    </div>
  );
};

export default Job;
