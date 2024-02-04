import TrackVisibility from 'react-on-screen';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import 'animate.css';

export const ImpactOfParameters = () => {
    return(
        <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h1>Impact of Parameters</h1>
                <p>This optimisation looks at ways to more efficiently find solutions in an appropriate time frame, considering the complexity of the problem significantly increases as the problem expands. There are multiple ways that the problem can expand as there are many parameters, each affecting the efficiency of the model. </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="numCustomers"># Customers</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="numDrones"># Drones</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="SR">Speed Ratio</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="droneLimit">Drone Limit</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="numCustomers">
                      <p>The number of customers is the most obvious way to increase the complexity of the problem as it affects all the variables and constraints. As mentioned above in "Why is this difficult?", there is a factorial relationship between the complexity and number of customers.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="numDrones">
                      <p>The number of drones does not appear to have a large impact on the solution, given the constraint on growth the number of customers has. Through the use of Benders’ Decomposition, we are left with a relatively simple allocation problem that uses the solution of the master problem to drastically reduce the number of variables, constraints and possible solutions. When there are n customers and d drones, we need at least (n/(1+d)), leaving (nd/(1+d)) at most. This means that we have maximum vars at 1 drone, however, it is still significantly less than customer variables. The only constraint it has an impact on is constraint (5), and does not change the number of constraints. Drones appear to not have a significant impact on the complexity of the model unless there are 0 drones, eliminating the need for a sub-problem</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="SR">
                      <p>The speed ratio appears to have very little impact on the complexity of the model. It leads to a model that favours solutions with more drone emphasis, often leading to trucks waiting for drones to return as the drones are significantly faster than the trucks. It does not impact the number of constraints or variables, it only alters constraints. The speed ratio also does not make any invalid solutions valid, it simply impacts the objective value for a valid solution. This could bring in more solutions that have an emphasis on drones as contenders for the most optimal solution, however this impact is negligible especially when the impact of other variables is considered. </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="droneLimit">
                      <p>The drone limit appears to have a relatively large impact on the complexity of the model. The drone limit starts with little impact when small, as the drones cannot reach any other customers, meaning that an optimal truck route is likely to provide the optimal overall solution. At high values, the drone limit also has little impact on the complexity, as the model will find a short path for the trucks, and use the drones to deliver to all the customers. When sufficiently high, it is a matter of finding the best drone allocations rather than an optimal truck route with the drones complementing it. As mentioned in the Drones section, the use of the truck solution reduces the number of variables in the sub problem, meaning the model handles the complexity in the sub problem better than in the master problem. When increased at the same time as the speed ratio, the emphasis on drone delivery is massively increased, as number of potential customers that could be delivered to by drones and benefit from the increased speed is higher. </p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>

    )
}