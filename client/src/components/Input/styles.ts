import styled, { css } from "styled-components";

import { Input } from "@chakra-ui/react";

export const InputCustom = styled(Input)`
  ${(props) =>
    props.isErrored &&
    css`
      border-color: #ff0000;
    `}
`;
