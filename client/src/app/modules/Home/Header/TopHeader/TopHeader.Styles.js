import styled from "styled-components";

export const StyledTopHeader = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: #1e1f29;
`;

export const Container = styled.div`
  width: 1170px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  &:before {
    display: table;
    content: " ";
  }
  &:after {
    clear: both;
    display: table;
    content: " ";
  }
`;

export const ul = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const PullLeft = styled(ul)`
  float: left !important;
`;

export const PullRight = styled(ul)`
  float: right !important;
`;

export const PullLeftLi = styled.li`
  display: inline-block;
  margin-right: 15px;
  font-size: 12px;
`;

export const PullLeftLiA = styled.span`
  color: #fff;
  font-weight: 500;
  transition: 0.2s color;
  background-color: transparent;
`;
