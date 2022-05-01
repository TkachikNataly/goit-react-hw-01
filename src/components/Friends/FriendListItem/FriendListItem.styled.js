import styled from "@emotion/styled";

export const Friend = styled.li`
   display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 300px;
  height: auto;
  margin: 10px 0;
  padding: 10px 0;
  background-color: #fff;
  /* box-sizing: content-box; */
  border: 2px solid rgba(131, 137, 150, 0.9);
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
  border-radius: 3px;
`;

export const IsOnline = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  background-color: ${({ isOnline }) => isOnline ? '#00ff00' : '#ff0000'};
  border-radius: 50%;
  margin-left: 20px;
`;

export const Foto = styled.img`
  margin-left: 20px;
  border-radius: 4px;
`;

export const Name = styled.p`
  margin-left: 20px;
  font-size: 28px;
`;