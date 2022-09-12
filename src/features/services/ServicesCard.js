import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

const ServicesCard = (props) => {
    return (
        <Card>
            <CardImg
                width="100%"
                src={props.service.image}
                alt={props.service.name}
            />
            <CardImgOverlay>
                <CardTitle>{props.service.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
};

export default ServicesCard;
