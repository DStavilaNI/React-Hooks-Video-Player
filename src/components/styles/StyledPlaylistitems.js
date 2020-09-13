import styled from "styled-components";

const StyledPlaylistitems = styled.div `

padding:0 20px;
overflow-y: auto;

height:28vw;
max-height: 500px;

::-webkit-scrolbar{
  width: 5px;
}

::-webkit-scrolbar-track{
  background: transparent;
}

::-webkit-scrolbar-thumb {
  background: #888;
  border-radius: 2px;

}

::-webkit-scrolbar-thumb:hover {
  background: #555;
}

`;

export default StyledPlaylistitems;
