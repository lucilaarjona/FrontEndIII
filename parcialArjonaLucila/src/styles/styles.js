import styled from 'styled-components';

export const BodyStyle = styled.div`
    background: black; 
    box-sizing: border-box;
    margin: 10px;
    padding: 0;
    font-family: 'Roboto', sans-serif;;
`;


export const CabeceraStyle = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    background-color: white;
    padding: 1rem;
    margin-bottom: 1rem;
    
    @media (max-width: 100%) {
        text-align: center;
    }
   h1{
    font-size: 40px; 
   }
   p{
    font-size: 20px;
   }
    span {
        background-color: black;
        color: white;
        padding: 5px;
        border-radius: 5px;
    }
`;

export const ListadoStyle = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    
`;

export const ItemStyle = styled.div`
    display: grid;
    grid-template-column: repeat(auto-fit, minmax(100px, 1fr));
    gap: px;
    justify-content: space-between;
    background-color: lightgrey;
    border: 10px;
    border-radius: 10px;
    padding: 1rem;
    margin: 1rem;
    width: 30%;
    @media (max-width: 30%) {
        width: 30%;
    }
    @media (max-width: 30%) {
        width: 30%;
    }
    h3 {
        text-align: center;
        font-size: 1;
    }
    img{
        width: 100%;
        height: 100%;
        position: center;

    }
    p {
        font-size: 1;
    }
    h4 {
        font-size: 1rem;
        font-weight: bold;
        text-align: center;
        margin: 10px;
        span {
            background-color:darkgrey;
            padding: 10px;
            font-weight: lighter;
            color: black ;
            border-radius: 10px;
        }
    }
`;

export const ButtonStyle = styled.button`
       display: inline-block;
                    outline: none;
                    cursor: pointer;
                    font-weight: 600;
                    border-radius: 3px;
                    padding: 12px 24px;
                    border: 0;
                    color: black;
                    background: darkgrey;
                    line-height: 1.15;
                    font-size: 16px;
                    :hover {
                        transition: all .1s ease;
                        box-shadow: 0 0 0 0 #fff, 0 0 0 3px black;
                    }
                
`;

