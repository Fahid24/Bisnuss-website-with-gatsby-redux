import React from "react"
import products from "../../Data/ProductsData"
import "../../Styles/color.css"
import { BsFillArrowRightCircleFill } from "react-icons/bs"
import styled from "styled-components"

const Products = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 30px;
  gap: 20px;
  justify-items: center;
`

const Card = styled.div`
  padding: 0;
  margin: 5px;
  width: min-content;
  background-color: white;
  border-radius: 20px;
  transition: transform 0.2s;
  box-shadow: 2px 5px pink;

  &:hover {
    transform: scale(1.1);
  }
`

const CardBody = styled.div`
   {
    padding: 10px 20px 20px 20px;
  }
`
const Header = styled.h3`
   {
    display: flex;
    align-items: center;
    gap: 5px;
  }
`

const Title = styled.p`
   {
    font-size: large;
    font-weight: 500;
  }
`

const CardFooter = styled.span`
   {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
  }
`

const CardFooterTitle = styled.small`
   {
    font-size: medium;
    font-weight: bold;
    cursor: pointer;
    color: gray;

    &:hover {
      color: black;
    }
  }
`

const Logo = styled.p`
  font-size: 30px;
`

const Product = () => {
  return (
    <Products>
      {products.map(product => (
        <Card key={product.id}>
          <img
            style={{borderRadius: '20px 20px 0 0'}}
            src={product.img}
            alt={product.type}
          />

          <CardBody className="card-body">
            <Header className="card-title">
              {/* {logo} */}
              <small className={`${product.color}`}>{product.type}</small>
            </Header>

            <Title className="card-title">{product.describe}</Title>

            <CardFooter className="">
              <CardFooterTitle className="">
                Automate publishing workflows
              </CardFooterTitle>

              <Logo>
                <BsFillArrowRightCircleFill className={`${product.color}`} />
              </Logo>
            </CardFooter>
          </CardBody>
        </Card>
      ))}
    </Products>
  )
}

export default Product
