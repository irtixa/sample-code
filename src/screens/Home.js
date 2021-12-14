import "../App.css";
import { Modal, Button } from "antd";
import React, { useState } from "react";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { Tabs, Radio, Space, Form, Input } from "antd";
//import  { Redirect } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import {
  PlusCircleFilled,
  CalendarOutlined,
  BorderBottomOutlined,
  BgColorsOutlined,
} from "@ant-design/icons";
import { Card, Avatar } from "antd";
const { TabPane } = Tabs;
const { Meta } = Card;




function Home() {
  const history = useHistory();
  const [tabPosition, setTabPosition] = useState("left");

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [issModalVisible, setissModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const closeModel = () => {
    setissModalVisible(false);
    setIsModalVisible(false);
    history.push(`/about`);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    setissModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setissModalVisible(false);
  };
  const showModal2 = () => {
    setissModalVisible(true);
  };
  
    

  return (
    <>
      <div classname="OM">
        <Button
          style={{
            width: 170,
            height: 100,
            fontSize: 25,
            marginTop: 350,
            marginLeft: 800,
          }}
          type="primary"
          onClick={showModal}
        >
          Open Modal
        </Button>
      </div>
      <Modal
        class="M2"
        title="When will your attomation start ? "
        bodyStyle={{ height: 350 }}
        width={1000}
        okButtonProps={{ style: { display: "none" } }}
        visible={issModalVisible}
        onCancel={handleCancel}
      >
        <div>
          <Tabs tabPosition={tabPosition} size="large">
            <TabPane tab="Lead Trigger" key="1">
              <Card  onClick={closeModel}
                style={{
                  width: 650,
                  marginTop: 0,
                  height: 80,
                  borderBottomColor: "#4de06f",
                  borderBottomWidth: 4,
                  cursor:"pointer"
                }}
               
              >
                <Meta
                  avatar={
                    <PlusCircleFilled
                      style={{ color: "#4de06f", fontSize: "large" }}
                    />
                  }
                  title="New Lead"
                  description="when   a    New   Lead   is   created   or    added"
                />
              </Card>

              <Card
                style={{
                  width: 650,
                  marginTop: 25,
                  height: 80,
                  borderBottomColor: "#4de06f",
                  borderBottomWidth: 4,
                }}
              >
                <Meta
                  avatar={
                    <PlusCircleFilled
                      style={{ color: "#4de06f", fontSize: "large" }}
                    />
                  }
                  title="Lead Update"
                  description="When a Lead field is updated or changedd"
                />
              </Card>

              <Card
                style={{
                  width: 650,
                  marginTop: 25,
                  height: 80,
                  borderBottomColor: "#4de06f",
                  borderBottomWidth: 4,
                }}
              >
                <Meta
                  avatar={
                    <CalendarOutlined
                      style={{ color: "#4de06f", fontSize: "large" }}
                    />
                  }
                  title=" On a Specific Date"
                  description="Such as Birthday, Renewal ,etc"
                />
              </Card>
            </TabPane>
            <TabPane
              tab=" Opportunity Trigger "
              key="2"
              style={{ borderBottomColor: "#8fa5ba", borderBottomWidth: 4 }}
            >
              “Content for the selected tab will be updated later”
            </TabPane>
            <TabPane tab=" Activity Trigger " key="3">
              “Content for the selected tab will be updated later”
            </TabPane>
            <TabPane tab="User Trigger" key="4">
              “Content for the selected tab will be updated later”
            </TabPane>
            <TabPane tab="Task Trigger" key="5">
              “Content for the selected tab will be updated later”
            </TabPane>
          </Tabs>
        </div>
      </Modal>

      <Modal
        title="+ Add Description"
        visible={isModalVisible}
        onOk={handleOk}
        okText="Next"
        onClick={showModal2}
        onCancel={handleCancel}
      >
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
        >
          <Form.Item label="Automation name *" name="Autoname">
            <Input />
          </Form.Item>

          <Form.Item label="Project name *" name="Pname">
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}


export default Home;
