// import "../App.css";
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
import "../styles/home.css";
const { TabPane } = Tabs;
const { Meta } = Card;

function Home() {
  const history = useHistory();
  // const [tabPosition, setTabPosition] = useState("top");

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
      <div className="openmodel">
        <div classname="OM">
          <Button className="btnopenmodel" type="primary" onClick={showModal}>
            Open Modal
          </Button>
        </div>
      </div>
      <div>
        <Modal
          className="flexx"
          class="M2"
          title="When will your attomation start ? "
          bodyStyle={{ height: 350 }}
          width={1000}
          okButtonProps={{ style: { display: "none" } }}
          visible={issModalVisible}
          onCancel={handleCancel}
        >
          <div>
            {/* tabPosition={tabPosition} */}
            <Tabs size="large" tabPosition={'left'} className="tabflex">
              <TabPane tab="Lead Trigger" key="1">
                <Card className="cardleadtrigger" onClick={closeModel}>
                  <Meta
                    avatar={<PlusCircleFilled className="PlusCircleFilled" />}
                    title="New Lead "
                    description="when   a    New   Lead   is   created   or    added"
                  />
                </Card>

                <Card className="cardleadtrigger">
                  <Meta
                    avatar={<PlusCircleFilled className="PlusCircleFilled" />}
                    title="Lead Update"
                    description="When a Lead field is updated or changedd"
                  />
                </Card>

                <Card className="cardleadtrigger">
                  <Meta
                    avatar={<CalendarOutlined className="PlusCircleFilled" />}
                    title=" On a Specific Date"
                    description="Such as Birthday, Renewal ,etc"
                  />
                </Card>
              </TabPane>
              <TabPane
                className="opportunitytrigger"
                tab=" Opportunity Trigger "
                key="2"
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
      </div>
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
