import './dev.scss';

import {ReactItem, ReactItemBody, ReactItemLeft, ReactItemRight, ReactItems} from './main';

import Icon1Image from './assets/icon1.jpg';
import Icon2Image from './assets/icon2.jpg';
import Icon3Image from './assets/icon3.jpg';

/*===example start===*/
class App extends React.Component {
  render() {
    return (
      <div className="hello-react-items">
        <ReactItems>
          <ReactItem>
            <ReactItemLeft>
              <img src={Icon1Image} width="24" alt=""/>
            </ReactItemLeft>
            <ReactItemBody>
              购物车
            </ReactItemBody>
            <ReactItemRight style={{color:'#f00',fontSize:'16px'}}>*</ReactItemRight>
          </ReactItem>


          <ReactItem>
            <ReactItemLeft>
              <img src={Icon2Image} width="24" alt=""/>
            </ReactItemLeft>
            <ReactItemBody>
              <span style={{fontSize:'28px'}}>搜索</span>
            </ReactItemBody>
            <ReactItemRight>
              <img src="http://image.flaticon.com/icons/png/128/126/126490.png" width="12" alt=""/>
            </ReactItemRight>
          </ReactItem>


          <ReactItem autoHeight={true}>
            <ReactItemBody>
              <div className="row">
                <div className="left">搜索 <br/> abc <br/>1234</div>
                <div className="right" style={{textAlign: 'right', color: '#999'}}>xljldsf</div>
              </div>
            </ReactItemBody>
            <ReactItemRight>
              <img src="http://image.flaticon.com/icons/png/128/126/126490.png" width="12" alt=""/>
            </ReactItemRight>
          </ReactItem>


        </ReactItems>


        <div className="blank-20"></div>
        <div className="blank-20"></div>

         <ReactItems innerPadding={false}>
          <ReactItem>
            <ReactItemLeft>
              <img src={Icon1Image} width="24" alt=""/>
            </ReactItemLeft>
            <ReactItemBody>
              购物车
            </ReactItemBody>
            <ReactItemRight style={{color:'#f00',fontSize:'16px'}}>*</ReactItemRight>
          </ReactItem>


          <ReactItem>
            <ReactItemLeft>
              <img src={Icon2Image} width="24" alt=""/>
            </ReactItemLeft>
            <ReactItemBody>
              搜索
            </ReactItemBody>
            <ReactItemRight>
              <img src="http://image.flaticon.com/icons/png/128/126/126490.png" width="12" alt=""/>
            </ReactItemRight>
          </ReactItem>

        </ReactItems>
      </div>
    );
  }
}
/*===example end===*/

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
