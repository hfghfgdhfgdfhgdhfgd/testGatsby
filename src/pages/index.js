import React from "react"
import styled from 'styled-components';
import Seo from "../components/Seo";

const Header = styled.header`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  text-align: center;
`

export default () => <div>
  <Header>
    <Seo title="Test page"/>
    This starter Gatsby PWA maximum optimizaton inder Google Lighthouse
  </Header>
</div>
