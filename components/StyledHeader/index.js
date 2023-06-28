import Head from "next/head";
import { StyledHeadline } from "./StyledHeader.styled";

export default function StyledHeader({ title, color }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <StyledHeadline color={color}>{title}</StyledHeadline>
    </>
  );
}
