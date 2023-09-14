import { Link } from 'react-router-dom';

import Banner from '../Banner';
import SearchResults from '../SearchResults';
import News from '../News';

export default function VendorHome() {
  return (
    <div className="card">
            <Banner />

            <div className="leftcolumn">
                <div className="col33">
                    <Link to="/design-detail">Product Category</Link>
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
