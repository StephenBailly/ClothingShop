import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";

const Container = styled.div`

`;
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({ padding: "10px", flexDirection: "column" })}
`;
const ImgContainer = styled.div`
    Flex: 1;
`;
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
    ${mobile({ height: "40vh" })}
`;
const InfoContainer = styled.div`
    Flex: 1;
    padding: 0 50px;
    ${mobile({ padding: "10px" })}
`;
const Title = styled.h1`
    font-weight: 200;
`;
const Description = styled.p`
    margin: 20px 0px;
`;
const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`;
const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0;
    display: flex;
    justify-content: space-between;
    ${mobile({ width: "100%" })}
`;
const Filter = styled.div`
    display: flex;
    align-items: center;
`;
const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`;
const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin: 0 5px;
    cursor: pointer;
`;
const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`;
const FilterSizeOption = styled.option`

`;
const AddContainer = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({ width: "100%" })}
`;
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 2px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 5px;
`;
const Button = styled.button`
    padding: 15px;
    font-weight: 500;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;

    &:hover {
        background-color: teal;
        opacity: 0.8;
        color: white;
    }
`;

const Product = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <ImgContainer>
                    <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
                </ImgContainer>
                <InfoContainer>
                    <Title>Denim Jumpsuit</Title>
                    <Description>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni voluptates assumenda blanditiis voluptatibus quam ipsa tempore, vero error tempora debitis sunt asperiores, itaque enim similique adipisci accusantium harum earum nostrum.</Description>
                    <Price>20,00 €</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="black" />
                            <FilterColor color="darkblue" />
                            <FilterColor color="grey" />
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove />
                            <Amount>1</Amount>
                            <Add />
                        </AmountContainer>
                        <Button>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default Product