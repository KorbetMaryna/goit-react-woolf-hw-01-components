import styled from "styled-components";

export const TransactionTable = styled.table `
    width: 100%;
    border-collapse: collapse;
    background-color: rgb(199, 199, 199);
    text-align: center;
    box-shadow:  0px 0px 10px 2px rgba(120, 120, 120, 0.75);
    margin-bottom: 80px;
`

export const TransactionThead = styled.thead `
    color: rgb(255, 255, 255);
    background-color: rgba(120, 120, 120, 0.75);
    text-transform: uppercase;
`

export const TransactionTh = styled.th`
    padding: 10px ;
    border: 1px solid rgba(120, 120, 120, 0.75); 
`

export const TransactionTr = styled.tr`
    &:nth-of-type(odd) {
        background-color:rgba(120, 120, 120, 0.75);
    }
`
export const TransactionTd = styled.td`
    border: 1px solid rgb(255, 255, 255);
    padding: 3px;
`
export const TransactionTbody = styled.tbody`
    text-align: center;
`  