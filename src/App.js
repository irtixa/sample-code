import logo from './logo.svg';
import './App.css';
import { Modal, Button } from 'antd';
import React, { useState } from 'react';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

import { Form, Input } from 'antd';
function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [issModalVisible, setissModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };



  const handleOk = () => {
    setIsModalVisible(false);
    setissModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const showModal2 = () => {

    setissModalVisible(true);
  };




  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>

      <Modal class="M2" title="Add " bodyStyle={{ height: 200 }}  width={1000}  visible={issModalVisible}>

        <div>
          <div class="L">
            <Button type="primary" block>
              Primary
            </Button>
            <Button block>Default</Button>
            <Button type="dashed" block>
              Dashed
            </Button>
            <Button type="link" block>
              Link
            </Button>
          </div>
          <div class="R">rr</div>
        </div>


      </Modal>

      <Modal title="+ Add Description" visible={isModalVisible} onOk={handleOk} okText="Next" onClick={showModal2} onCancel={handleCancel}>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}

        >
          <Form.Item
            label="Automation name *"
            name="Autoname"

          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Project name *"
            name="Pname"

          >
            <Input />
          </Form.Item>
        </Form>

      </Modal>
    </>
  );

}

export default App;
