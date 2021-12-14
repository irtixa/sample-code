import "../styles/about.css";
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
    <div className="aboutScreen">
      <div className="aboutHeader">
        <div className="automation">
          <Button ghost type="primary" size="medium" className="homeBtn">
            <HomeFilled style={{ color: "black" }} />
          </Button>
          <Input
            placeholder="Enter your name"
            suffix={
              <EditFilled
                className="homeIcon"
                style={{
                  color: "black",
                  borderLeft: "1px solid black",
                  margin: "0 0 0 10px",
                }}
              />
            }
            style={{ width: 400 }}
          />
        </div>
        <div className="save">
          <Button ghost type="primary" size="medium" className="btn">
            <LeftOutlined style={{ color: "black" }} />
          </Button>
          <Button className="b" ghost type="primary" size="medium">
            <RightOutlined style={{ color: "black" }} />
          </Button>
          <Button className="b" ghost type="primary" size="medium">
            <CloseOutlined style={{ color: "black" }} />
          </Button>
          <Button className="b" ghost type="primary" size="medium">
            <MinusOutlined style={{ color: "black" }} />
          </Button>
          <Button ghost className="bc" type="primary" size="medium">
            Save
          </Button>
          <Button type="primary" size="medium" className="publish">
            Publish
          </Button>
        </div>
      </div>
      <Card
        style={{
          width: 550,
          height: 80,
          borderBottomColor: "#4de06f",
          borderBottomWidth: 4,
          marginLeft: 550,
          marginTop: 100,
        }}
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
            <Input placeholder="" style={{ width: 200 }}></Input>
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
        <div style={{ marginTop: 40 }}>
          <Checkbox>Specify exact time and date </Checkbox>
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
          <div style={{marginLeft: 50,width:400}}>
          <TimePicker defaultValue={moment('12:08', format)} format={format} />
          </div>
        </div>
      </Modal>
      <div>
        <Menu style={{ width: 100 }} defaultSelectedKeys={["1"]} mode="inline" className="Y" >
          <SubMenu style={{ width: 256 }} key="sub1" icon={<PlusOutlined />} className="X">
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
  );
}

export default About;
