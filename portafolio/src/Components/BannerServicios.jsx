import {Col, Row, Container, Button} from 'react-bootstrap'
import styled from 'styled-components'
import { BiRightArrowAlt } from "react-icons/bi";


const Box = styled.div`
background: linear-gradient(135deg, #9EF1E9 0%, #32F4E2 100%);
`

export default function BannerServicios(){
    return(
        <Box id="servicio">
            <Container >
                <br />
                <h1 className="text-center m-3">Servicios</h1>
                <br />
                <Row >
                    <Col xs={12} md={4} className="mb-5 text-center">
                        <h4>Diseño</h4>
                        <p>Experiencia de usuario</p>
                        <p>Interfaz de usuario</p>
                        <p>Aplicaciones web</p>
                        <p>Prueba de concepto</p>
                        <Button variant="outline-primary">Ver servicios de diseño <i><BiRightArrowAlt /></i></Button>{' '}
                    </Col>
                    <Col xs={12} md={4} className="mb-5 text-center">
                        <h4>Desarrollo</h4>
                        <p>Aplicaciones móviles</p>
                        <p>Sitios web</p>
                        <p>Aplicaciones web progresivas</p>
                        <Button variant="outline-primary">Ver servicios de desarrollo <i><BiRightArrowAlt /></i></Button>{' '}
                    </Col>
                    <Col xs={12} md={4} className="mb-5 text-center">
                        <h4>Marca</h4>
                        <p>Identidad de la marca</p>
                        <p>Estrategia de marca</p>
                        <Button variant="outline-primary">Ver servicios de marca <i><BiRightArrowAlt /></i> </Button>{' '}
                    </Col>
                    </Row>
            </Container>
        </Box>
    )
}