import styled from "styled-components";

import Button from "../../../core/Button";

export const CustomButton = styled(Button)`
  box-shadow: none !important;
  background: var(--color70) !important;
  color: var(--color20) !important;
  &:hover {
    background: var(--color80) !important;
  }
  &[class*="focused"] {
    background: var(--color60) !important;
  }
  &[class*="active"] {
    background: var(--color60) !important;
  }
`;
export const GetLicense = styled(CustomButton)`
  background: var(--color100) !important;
  color: var(--white) !important;
`;
