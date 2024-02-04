import TrackVisibility from 'react-on-screen';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import 'animate.css';


export const ComplexityExplanation = () => {
    return(
        <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Why is this problem difficult?</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="non-mathematical">Non-Mathematical Explanation</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="mathematical">Mathematical Explanation</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="non-mathematical">
                      <p>If you take 3 customers, there is 2 ways to deliver this, 1,2,3 or 1,3,2. If we add a fourth, then we could choose any 3,2,1, then you would be left 3 customers left to deliver to and the number of ways we can do this was just calculated as 2. There are 3 customers we could go to first, so have a total of 4x3 (12) ways to do this. If we add an extra customer, now we have 5 customers. Using similar logic to when we added the fourth customer in, we can choose any of the 5 customers (1,2,3,4,5) and each with 4x3 (12) ways to deliver to the 4 remaining customers. This leaves us with 5x4x3x2 (60). This means that every time we add a new customer, we multiply the previous number of solutions by that new number of customers. This is known as a factorial, and has a very high growth rate, meaning that by the time we are at 10!, we have around 3.6 million solutions, 15! Has around 1.3 trillion and 20! Has around 1.3 quintillion. </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="mathematical">
                      <h3>Approach 1 - Permutations</h3>
                      <p>The TSP solution can be thought of as an ordering of the customers, where the order represents the order they customers were chosen. To find the total number of ways a set of numbers can be ordered, we use the permutation formula, which is just the factorial operation when ordering all elements of the set.</p>
                      <h3>Approatch 2 - Recursion</h3>
                      <p>The TSP has a recursive nature, leading to the factorial growth rate. A factorial growth rate means that the ratio for the cardinality of the set of solutions for n to the cardinality of the set of solutions for n-1 is dependent on n. Let P be the path taken for a solution (P in S_n) and P_i be the ith customer visited. In the first step, there are n+1 customers that can be chosen.</p>
                      </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
    )
}