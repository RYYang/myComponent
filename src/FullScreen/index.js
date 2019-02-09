import  React from 'react';
import Animate from 'rc-animate';
import './index.less';
import Button from 'antd/lib/button';
import QueueAnim from 'rc-queue-anim';
import { Parallax } from 'rc-scroll-anim';

class FullScreen extends React.PureComponent {

    render() {
        return (
            <div>
                <div className='screen1'>

                </div>
                <div className='screen2'>
                    <Parallax
                        animation={{ x: 0, opacity: 1, playScale: [0.5, 0.8] }}
                        style={{ transform: 'translateX(-100px)', opacity: 0 }}
                        className="box"
                    />
                    <QueueAnim
                        delay={500}
                        className="queue-simple"
                        type="bottom"
                    >
                        <div key="a">依次进场</div>
                        <div key="b">依次进场</div>
                        <div key="c">依次进场</div>
                        <div key="d">依次进场</div>
                    </QueueAnim>
                </div>
                <div className='screen3'>
                    1
                </div>
                <div className='screen4'>

                </div>
                <div className='screen5'>

                </div>
            </div>
        )
    }
}

export default FullScreen;