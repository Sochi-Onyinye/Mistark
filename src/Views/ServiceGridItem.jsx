import "./BusinessPage.css";
export default function ServiceGridItem(props) {
  const { serviceName, serviceImage, serviceDescription } = props;
  console.log(props)
  return (
    <button className="row card" id="eachcard">
      <div className="col-3">
        <img id="serviceimage" src={serviceImage}></img>
      </div>
      <div className="col-9">
        <h6 className="row" id="servicename">
          {serviceName}
        </h6>
        <p className="row" id="servicedesc">
          {serviceDescription}
        </p>
      </div>
    </button>
  );
}
