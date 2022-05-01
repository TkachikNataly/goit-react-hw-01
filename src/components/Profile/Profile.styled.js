import styled from "@emotion/styled";

export const UserCard = styled.div`
  width: 380px;
  margin: 15px auto;
  text-align: center;
  background-color: #CCCCFF;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%), 0px 2px 1px rgb(0 0 0 / 20%);
  border-radius: 5px;
`;

export const Description = styled.div`
  padding: 30px;
`;

export const Avatar = styled.img`
  width: 50%;
  border-radius: 50%;
  margin: 40px auto;
`;

export const Name = styled.p`
  font-size: 24px;
  font-weight: 700;
  margin-: 10px;
  `;

export const Tag = styled.p`
  margin-top: 12px;
  color #9FE2BF;
  `;

export const Location = styled.p`
margin-top: 12px;
color: #9FE2BF;
`;

export const StatsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #f2f4f7;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  width: calc(100% / 3);
  padding: 16px;
  border: 1px solid #dcdfe3;
  ${'' /* >:first-child {
    color:#757575;
  };
  >:last-child{
    margin-top: 12px;
    font-weight: 700; */}
  };
`;