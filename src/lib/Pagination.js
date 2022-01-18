import Color from "../const/Color";
import styled from "styled-components";

export const Pagination = ({ count, setCount, prevDisable, nextDisable }) => {
  let prev;
  let next;
  if (prevDisable) {
    prev = (
      <DisabledLink>
        <s>&lt; Prev</s>
      </DisabledLink>
    );
  } else {
    prev = (
      <PaginationLink onClick={() => setCount(count - 1)}>
        &lt; Prev
      </PaginationLink>
    );
  }
  if (nextDisable) {
    next = (
      <DisabledLink>
        <s>Next &gt;</s>
      </DisabledLink>
    );
  } else {
    next = (
      <PaginationLink onClick={() => setCount(count + 1)}>
        Next &gt;
      </PaginationLink>
    );
  }

  return (
    <Container>
      {prev}
      {next}
    </Container>
  );
};

const Container = styled.div`
  margin-top: 30px;
  margin-bottom: 50px;
  display: flex;
  justify-content: space-between;
`;

const PaginationLink = styled.a`
  display: inline-block;
  font-family: eurostile-extended, sans-serif;
  font-weight: 400;
  font-style: normal;
  color: ${Color.WHITE};
`;

const DisabledLink = styled.p`
  display: inline-block;
  font-family: eurostile-extended, sans-serif;
  font-weight: 400;
  font-style: normal;
  color: ${Color.WHITE};
  margin: 0;
`;
