import styled from "@emotion/styled";

export const Friend = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: #CCCCFF;
  padding: 15px;
  border-radius: 5px;
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