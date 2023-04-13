import "./BusinessPage.css";
export default function ServiceGrid(props) {
    return (
        <div className="col-6">
            <div className="row card" id="businessservice">
                {props.children}
            </div>
        </div>
    )
}