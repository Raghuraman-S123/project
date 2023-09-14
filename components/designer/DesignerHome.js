import Banner from "../Banner";
import News from "../News";

export default function DesignerHome() {
  return (
    <div className="card">
            <Banner />

            <div className="leftcolumn">
                <div className="col33">
                    <div>Product Category</div>
                </div>
                <div className="col33">
                    <div>Product Category</div>
                </div>
                <div className="col33">
                    <div>Product Category</div>
                </div>
                <div className="col33">
                    <div>Product Category</div>
                </div>
                <div className="col33">
                    <div>Product Category</div>
                </div>
                <div className="col33">
                    <div>Product Category</div>
                </div>
                <div className="col33">
                    <div>Product Category</div>
                </div>
                <div className="col33">
                    <div>Product Category</div>
                </div>
                <div className="col33">
                    <div>Product Category</div>
                </div>
            </div>
            <div className="rightcolumn">
                <News />
            </div>
        </div>
  )
}
