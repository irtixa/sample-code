// import "../styles/about.css";
import React, { useState } from "react";
import { Button, Input, Card, Avatar } from "antd";
import { Modal, Checkbox } from "antd";
import { DatePicker, Space, TimePicker } from "antd";
import moment from "moment";
import { Menu } from "antd";
import {
  HomeFilled,
  EditFilled,
  LeftOutlined,
  RightOutlined,
  CloseOutlined,
  HolderOutlined,
  MinusOutlined,
  FieldTimeOutlined,
  PlusOutlined,
  PicCenterOutlined,
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
const { RangePicker } = DatePicker;
const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];
const dateFormat = "YYYY/MM/DD";
const weekFormat = "MM/DD";
const monthFormat = "YYYY/MM";
const format = 'HH:mm';
const { Search } = Input;
const { Meta } = Card;
const { SubMenu } = Menu;

function About() {
  const [waitConditionModel, setWaitConditionModel] = useState(false)
  // const [isModalVisible, setIsModalVisible] = useState(false);


  return (
    <div >
    <div className="aboutScreen">
      <div className="aboutHeader">
        <div className="automation">
          <Button ghost type="primary" size="medium" className="homeBtn">
            <HomeFilled className="homefilled"  />
          </Button>
          <Input className="input"
            placeholder="Enter your name"
            suffix={
              <EditFilled
                className="homeIcon"
               
              />
            }
            
          />
        </div>
        <div className="save">
          <Button ghost type="primary" size="medium" className="btn">
            <LeftOutlined className="btnb"  />
          </Button>
          <Button className="b" ghost type="primary" size="medium">
            <RightOutlined className="btnb"  />
          </Button>
          <Button className="b" ghost type="primary" size="medium">
            <CloseOutlined className="btnb"  />
          </Button>
          <Button className="b" ghost type="primary" size="medium">
            <MinusOutlined className="btnb"  />
          </Button>
          <Button ghost className="bc" type="primary" size="medium">
            Save
          </Button>
          <Button type="primary" size="medium" className="publish">
            Publish
          </Button>
        </div>
      </div>
      <Card className="card"
      
      >
        <Meta
          title="Lead Update"
          description="When a Lead field is updated or changedd"
        />
         <div className="menuContainer">

{/* <Button ghost type="primary" className="BBB" icon={<PlusOutlined />}></Button> */}
</div>
      </Card>
      
      <Modal
        title="Set Wait Condition"
        bodyStyle={{ height: 300 }}
        width={1000}
        visible={waitConditionModel}
        onOk={()=>setWaitConditionModel(false)}
        okText="Save"
        onClick={()=>setWaitConditionModel(false)}
        onCancel={()=>setWaitConditionModel(false)}
      >
        <div>
          {" "}
          <h3>Lead Waits</h3>
        </div>
        <div>
          <Checkbox>For</Checkbox>
        </div>
        <div className="lastmodel">
          <div className="inputmenu">
            <Input placeholder=""></Input>
          </div>

          <div className="formenu">
            <label for="time"></label>

            <select name="time" id="time" className="select">
              <option value="Minutes"></option>
              <option value="Minutes">Minutes</option>
              <option value="Hours">Hours</option>
              <option value="Days">Days</option>
              <option value="Weeks">Weeks</option>
              <option value="Months">Months</option>
              <option value="Years">Years </option>
            </select>
          </div>
        </div>
        <div className="checkbox1">
          <Checkbox >Specify exact time and date </Checkbox>
        </div>
        <div className="final">
          <div>
            <Space direction="vertical" size={12}>
              <DatePicker
                defaultValue={moment("01/01/2015", dateFormatList[0])}
                format={dateFormatList}
              />
            </Space>
          </div>
          <div className="timepicker">
          <TimePicker defaultValue={moment('12:08', format)} format={format} />
          </div>
        </div>
      </Modal>
      <div>
        <Menu  defaultSelectedKeys={["1"]} mode="inline" className="Y" >
          <SubMenu  key="sub1" icon={<PlusOutlined />} className="X">
            <Menu.ItemGroup key="g1" title="Choose Condition or Action">
              <Menu.Item key="1" icon={<FieldTimeOutlined />} onClick={()=>setWaitConditionModel(true)}>
                Wait
              </Menu.Item>
              <Menu.Item key="2" icon={<HolderOutlined />}>
                If/Else
              </Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
        </Menu>
      </div>
    </div>
    </div>
  );
}

export default About;
