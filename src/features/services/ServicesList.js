import { Col, Row } from "reactstrap";
import ServicesCard from "./ServicesCard.js";
import { SERVICES } from "../../app/shared/SERVICES.js";

const ServicesList = () => {
    return (
        <Row className="ms-auto">
            {SERVICES.map((service) => {
                return (
                    <Col md="5" className="m-4" key={service.id}>
                        <ServicesCard service={service} />
                    </Col>
                );
            })}
        </Row>
    );
};

export default ServicesList;
