import { Form, Input, Button,  message } from 'antd';
import loginreq from '../../request/LoginRequest';
import './Login.css'; // Import CSS file

const Login = () => {
    const onFinish = async (values: any) => {
        const { email, password } = values;
        try {
          await loginreq(email, password);
          message.success('Login Successfully');
        } catch (error) {
  
          message.error('Login failed. Please try again.');
        }
      };
  return (
 <div className='login-container'>
 <div className='login-outer'>
    <h2 className='log'>LOGIN</h2>
    <Form
      name="login"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      className='login-form'
    >
      <Form.Item
        name="email"
        rules={[{ required: true, message: 'Please input your email!' }]}
        className="login-form-item custom-form-item"
      >
        <Input type="email" placeholder="Email" />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
        className="login-form-item custom-form-item "
      >
        <Input.Password placeholder="Password" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-button">
          Login
        </Button>
      </Form.Item>
    </Form>
    </div>
    </div>
  );
};

export default Login;
