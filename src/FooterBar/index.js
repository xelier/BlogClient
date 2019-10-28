import React, {Component} from "react";
import './index.less'

class FooterBar extends Component{
    render() {
        return(
            <div>
                <a className={'link'} href={`/`}>风信|WindTalk</a>©2019 Created by Xelier
                <br/>
                <img src="https://pic3.zhimg.com/80/v2-d0289dc0a46fc5b15b3363ffa78cf6c7.png" alt={'公安备案'}/>
                <a className="link" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802020088">
                    京公网安备 11010802010035 号
                </a>
            </div>
        )
    }

}

export default FooterBar;
