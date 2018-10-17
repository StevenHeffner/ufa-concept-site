import { css } from "styled-components";

export const media = {
  bigTablet: (...args) => css`
    @media (max-width: 1024px) {
      ${css(...args)};
    }
  `,
  tablet: (...args) => css`
    @media (max-width: 768px) {
      ${css(...args)};
    }
  `,
  handheld: (...args) => css`
    @media (max-width: 480px) {
      ${css(...args)};
    }
  `,
  smallHandheld: (...args) => css`
    @media (max-width: 320px) {
      ${css(...args)};
    }
  `
};
