import React, {
  Component
} from 'react';
import './page1.css';
import CurvedProgressBar from '../../Charts/CurvedProgressBar/CurvedProgressBar';
import PanelCard from '../../UI/PanelCard/PanelCard';

class Page1 extends Component {
  render() {
    return (
      <div className="page1">
        <div className="row">
          <div className="col-md-12">
            <h5>Dashboard app</h5>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-lg-6 col-xl-3">
            <PanelCard>
              <CurvedProgressBar></CurvedProgressBar>
            </PanelCard>
          </div>
        </div>
      </div>
    )
  }
}

export default Page1;