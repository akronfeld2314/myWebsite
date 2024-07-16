"use client"

import { antdTheme } from "@/app/them";
import { ExclamationCircleOutlined, MenuOutlined } from "@ant-design/icons";
import { Button, ConfigProvider, Dropdown, MenuProps } from "antd";
import Image from "next/image";
import "./Amk.css";

const Amk = () => {

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/14K9YT-__6oJa-3T3ri2xUeu_GmvTf2Pi/view?usp=sharing">
          Download my Resume!
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="mailto:akronfeld2314+myWebsite@gmail.com">
          Email Me!
        </a>
      ),
    },
    {
      key: '3',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="TODO">
          TI Combat Roller (Coming Soon!)
        </a>
      ),
      icon: <ExclamationCircleOutlined></ExclamationCircleOutlined>,
      disabled: true,
    },
  ];

  return (
    <ConfigProvider theme={antdTheme}>
      <div className="amk">
        {/* Header */}
        {/* Section 1 */}
        <div className="section intro-section">
          <div className="quote-menu">
            <div></div>
            <div className="quote-signature">
              <div>
                <p>{`"When something is important enough, you do it even if the odds are not in your favor."`}</p>
              </div>
              <div className="signature">
                <p>{`-Elon Musk`}</p>
              </div>
            </div>
            <div className="menu">
              <Dropdown menu={{items}}>
                <Button type="link" icon={<MenuOutlined></MenuOutlined>}/>
              </Dropdown>
            </div>
          </div>
          <div>
            <Image className="portrait" src="/myWebsite/portrait.svg" alt={""} width={250} height={500}></Image>
          </div>
          <div className="introduction">
            <p className="name">{`Alexander M. Kronfeld`}</p>
            <br/>
            <p>{`I'm a seasoned Full Stack developer with passions for Fitness, Finance, and the Future.`}</p>
            <br/>
            <p>{`This website is an evolving project so bookmark the page to follow my story!`}</p>
          </div>
        </div>
        {/* Section 2 */}
        {/* <div className="section"></div> */}
      </div>
    </ConfigProvider>
  )
}

export default Amk;