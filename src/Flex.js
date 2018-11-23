import React, { Component } from 'react';
import './Flex.less'
import codewars from './assets/codewars.png';
import csdn from './assets/csdn.png';
import douban from './assets/douban.png';
import github from './assets/github.png';
import jianshu from './assets/jianshu.png';
import weibo from './assets/weibo.png';
import zhihu from './assets/zhihu.png';


class Flex extends Component {
    render() {
        return (
            <div>
                <div className="Flex">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="link">
                    © 2018 Yangyang
                    <a href="https://github.com/RYYang" target="_blank">
                        <img src={github}/>
                    </a>
                    <a href="https://www.jianshu.com/u/1f85cd1aa43a" target="_blank">
                        <img src={jianshu}/>
                    </a>
                    <a href="https://www.zhihu.com/people/foryangyang/activities" target="_blank">
                        <img src={zhihu}/>
                    </a>
                    <a href="https://www.douban.com/people/72115372/" target="_blank">
                        <img src={douban}/>
                    </a>
                    <a href="https://weibo.com/u/1769821012" target="_blank">
                        <img src={weibo}/>
                    </a>
                    <a href="https://me.csdn.net/u011804891" target="_blank">
                        <img src={csdn}/>
                    </a>
                    <a href="https://www.codewars.com/" target="_blank">
                        <img src={codewars}/>
                    </a>
                </div>
            </div>
            );
    }
}

export default Flex;