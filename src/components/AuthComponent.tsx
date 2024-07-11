import { signIn } from 'aws-amplify/auth';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

export default function AuthComponent() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const userSignIn = async () => {
    try {
      const response = await signIn({ username: email, password });
      console.log('Sign-in response:', response);
      router.push('/dashboard');
    } catch (error) {
      console.error('Error signing in', error);
    }
  };

  // const signInWithGoogle = async () => {
  //   try {
  //     await Auth.federatedSignIn({ provider: 'Google' });
  //   } catch (error) {
  //     console.error('Error signing in with Google', error);
  //   }
  // };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card>
            <Card.Body>
              <h3 className="card-title text-center mb-4">Sign In</h3>
              <Form>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  className="w-100"
                  onClick={userSignIn}
                >
                  Sign In
                </Button>
                {/* <Button variant="secondary" className="w-100 mt-3" onClick={signInWithGoogle}>
                  Sign In with Google
                </Button> */}
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
