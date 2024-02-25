import styled from "styled-components";

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    box-shadow: 0px 0px 10px 2px rgba(120, 120, 120, 0.75);
    width: 400px;
    border-radius: 8px; 
    padding-bottom: 40px;
    gap: 28px;
`
export const CardDescription = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px auto;
    gap: 16px;
    color: rgba(120, 120, 120, 0.75);
`
export const UserAvatar = styled.img`
    --s: 140px; /* image size */
    --b: 4px; /* border thickness */
    --c: rgba(120, 120, 120, 0.75); /* border color */
    --cb: #E0E0E0; /* background color */
    --f: 1; /* initial scale */

    width: var(--s);
    aspect-ratio: 1;
    padding-top: calc(var(--s)/5);

    cursor: pointer;
    border-radius: 0 0 999px 999px;
    --_g: 50%/calc(100%/var(--f)) 100% no-repeat content-box;
    --_o: calc((1/var(--f) - 1)*var(--s)/2 - var(--b));
    outline: var(--b) solid var(--c);
    outline-offset: var(--_o);
    background: 
    radial-gradient(
        circle closest-side,
        var(--cb) calc(99% - var(--b)),var(--c) calc(100% - var(--b)) 99%,#0000
        ) var(--_g);
    -webkit-mask: 
    linear-gradient(#000 0 0) 
    no-repeat 50% calc(1px - var(--_o)) / calc(100%/var(--f) - 2*var(--b) - 2px) 50%, 
    radial-gradient(circle closest-side,#000 99%,#0000) var(--_g);
    mask: 
    linear-gradient(#000 0 0) 
    no-repeat 50% calc(1px - var(--_o)) / calc(100%/var(--f) - 2*var(--b) - 2px) 50%, 
    radial-gradient(circle closest-side,#000 99%,#0000) var(--_g);
    transform: scale(var(--f));
    transition: .5s;
    &:hover {
    --f: 1.4; /* hover scale */
}
`
export const UserName = styled.p`
    font-size: 28px;
    font-weight: bold;
    color: #000;
`
export const UserTag = styled.p`
    font-size: 16px;
    font-weight: bold;
`
export const UserLocation = styled.p`
    font-size: 18px;
`
export const StatsList = styled.ul`
    display: flex;
    font-size: 18px;
    gap: 16px;
`
export const StatsItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const StatsItemLabel = styled.span`
    color: rgba(120, 120, 120, 0.75);
    margin-bottom: 8px;
`
export const StatsItemQuantity = styled.span`
    font-size: 18px;
    font-weight: bold;
    color: #000;
`