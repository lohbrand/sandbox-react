import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    color: ${(props) => (props.whiteColor ? "red" : "black")};
  }
	/* @page { */
    /* Trim box set to A4 with the lower left corner at 10mm, 10mm */
    /* Crop box set to the trim box */
   /*  -cchip-trimbox: 10mm 10mm 210mm 297mm;
    -cchip-cropbox: 0mm 0mm 230mm 317mm; */

    /* Bleedbox 6mm wider and higher than trim box and positioned 3mm, 3mm to the left and bottom */
    /* -cchip-bleedbox: 7mm 7mm 216mm 303mm; */

    /* Size and width of the page in total 20 mm wider and higher than trim box */
    /* size: 230mm 317mm; */
  /* } */
`;
